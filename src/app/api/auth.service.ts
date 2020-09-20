import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, tap, catchError } from 'rxjs/operators';
import Amplify, { Auth } from 'aws-amplify';
import { environment } from './../../environments/environment';
import { TmplAstRecursiveVisitor } from '@angular/compiler';
import { BehaviorSubject, from, of } from 'rxjs';
import { Observable } from 'rxjs'
@Injectable()
export class AuthService {

  public loggedIn: BehaviorSubject<boolean>;

  constructor(
    private router: Router
  ) {
    this.loggedIn = new BehaviorSubject<boolean>(false);



    from(Auth.currentAuthenticatedUser()).subscribe((
      user
    ) => {

      const currentSession = user.signInUserSession;
      user.refreshSession(currentSession.refreshToken, (err, session) => {

      });

    })
  }


  /** signup */
  public signUp(phone, pass): Observable<any> {
    return from(Auth.signUp(
 {
      username: phone,
      password:phone,
      attributes: {
        phone_number: phone,
      },
    }
    ));
  }

  /** confirm code */
  public confirmSignUp(email, code): Observable<any> {
    return from(Auth.confirmSignUp(email, code));
  }

  /** signup */
  public resendCode(email): Observable<any> {
    return from(Auth.resendSignUp(email));
  }

  /** signin */
  public signIn(email): Observable<any> {
    return from(Auth.signIn(email))
      .pipe(
        tap((user) => {
          this.loggedIn.next(true);
          localStorage.setItem('isLogged', 'true');
          from(Auth.currentAuthenticatedUser()).subscribe((
            user
          ) => {

            const currentSession = user.signInUserSession;
            user.refreshSession(currentSession.refreshToken, (err, session) => {

            });

          })

        }
        )
      );
  }

  /** get authenticat state */
  public getAuthenticatedUser(): Observable<any> {
    from(Auth.currentAuthenticatedUser()).subscribe((
      user
    ) => {

      const currentSession = user.signInUserSession;
      user.refreshSession(currentSession.refreshToken, (err, session) => {

      });

    })
    return from(Auth.currentAuthenticatedUser())
      .pipe(
        map(result => {
          return result;
        }),
        catchError(error => {
          return of(error);
        })
      );
  }

  public getCurrentSession(): Observable<any> {
    from(Auth.currentAuthenticatedUser()).subscribe((
      user
    ) => {
      const currentSession = user.signInUserSession;
      user.refreshSession(currentSession.refreshToken, (err, session) => {
        localStorage.setItem('loggedIn', JSON.stringify(true));

      });

    })

    return from(Auth.currentSession()).pipe(
      map(result => {
        return result;
      }),
      catchError(error => {
        return of(error);
      })
    );
  }


  /** get authenticat state */
  public isAuthenticated(): Observable<boolean> {

    return from(Auth.currentAuthenticatedUser())
      .pipe(
        map(result => {
          this.loggedIn.next(true);


          return true;
        }),
        catchError(error => {
          this.loggedIn.next(false);

          return of(false);
        })
      );
  }

  /** forgot password code request */
  public forgotPassword(username): Observable<any> {

    return from(Auth.forgotPassword(username));

  }
  /**sumbit forgot password */
  public forgotPasswordSubmit(email, code, password): Observable<any> {

    return from(Auth.forgotPasswordSubmit(
      email,
      code,
      password
    )
    );

  }

  /** signout */
  public signOut() {
    from(Auth.signOut())
      .subscribe(
        result => {

          this.loggedIn.next(false);
          localStorage.clear();
          this.router.navigate(['/login']);
        },
        error => console.log(error)
      );
  }
}