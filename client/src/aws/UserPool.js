import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "us-west-1_uLOKrcajX",
    ClientId: "11ks57du1i82i2e0rovoilrnsb"
};

export default new CognitoUserPool(poolData);