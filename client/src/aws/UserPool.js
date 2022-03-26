import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "us-west-1_j8gjkFesJ",
    ClientId: "4nptimqfo7gi11mdlb0ei8tbtt"
};
// Pool ARN : arn:aws:cognito-idp:us-west-1:207788422341:userpool/us-west-1_j8gjkFesJ
export default new CognitoUserPool(poolData);