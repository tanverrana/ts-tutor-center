import React from 'react';

const Blog = () => {
    return (
        <div className="container my-4 mb-5">
            <h1 className="text-center services-title">Question & Answer</h1>
            <div>
                <h3>Difference between authorization and authentication.</h3>
                <div>
                    <table className="table-bordered  text-center w-75">
                        <thead>
                            <tr>
                                <th scope="col">Authorization</th>
                                <th scope="col">Authentication</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Authentication verifies who the stoner is.</td>
                                <td>Authorization determines what coffers a stoner can pierce.</td>
                            </tr>
                            <tr>
                                <td>Authentication is the first step of a good identity and access operation process.</td>
                                <td>Authorization always takes place after authentication.</td>
                            </tr>
                            <tr>
                                <td>Authentication is visible to and incompletely changeable by the stoner.</td>
                                <td>Authorization is n’t visible to or changeable by the stoner.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="my-4">
                <h3> Why are you using firebase? What other options do you have to implement authentication?</h3>
                <div>
                    <p>I can use Firebase Authentication to allow users to sign in to our app using one or more sign-in methods, including email address and password sign-in, and federated identity providers such as Google Sign-in , Facebook Login, Git Hub logins and any others social media .So I can use Firebase.And Other option is React Hook that i can use React Hook.</p>
                </div>
            </div>
            <div>
                <h3>What other services does firebase provide other than authentication</h3>
                <p>There are many services which Firebase provides, Most useful of them are:</p>
                <h5>➡Cloud Firestore.</h5>
                <h5>➡Cloud Functions.</h5>
                <h5>➡Authentication.</h5>
                <h5>➡Hosting.</h5>
                <h5>➡Cloud Storage.</h5>
                <h5>➡Google Analytics.</h5>
                <h5>➡Predictions.</h5>
                <h5>➡Cloud Messaging.</h5>
            </div>
        </div>
    );
};

export default Blog;