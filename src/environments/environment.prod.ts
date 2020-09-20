export const environment = {
  production: true,
    // URL of production API
    apiUrl: 'https://kmfrv7ti1f.execute-api.ap-south-1.amazonaws.com/Stage/',
    apiKey: 'coNpjhTpmw21BCOTwGF8R1uKIA5BxSZaaA7zrGya',
  
    amplify: {
      Auth: {
        identityPoolId: 'ap-south-1:ce78fbee-560e-4228-b1a9-159e673ec218',
        region: 'ap-south-1',
        userPoolId: "ap-south-1_YfvTsfNJe",
        userPoolWebClientId: '5tm2srjhk6kokcu7j2f30didiq',
      },
      // Storage: {
      //   AWSS3: {
      //     bucket: 'sonicmedia135950-dev', //REQUIRED -  Amazon S3 bucket
      //     region: 'ap-south-1', //OPTIONAL -  Amazon service region
      //   }
      // }
  
    }
};