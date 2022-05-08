import React from "react";

const Blogs = () => {
  return (
    <div className="container">
      <h3>Difference between javascript and nodejs</h3>
      <p>
        Any browser that supports JavaScript may execute it. Because Node JS is
        an interpreter or execution environment for a JavaScript programming
        language with numerous flaws, it needs libraries that JavaScript can
        readily access. JavaScript is often used for client-side web application
        activities. An activity may handle business validation, dynamic page
        display, or a simple Ajax call. Any online application uses them for a
        limited period. while Node JS is used for non-blocking access to any
        operating system. A non-blocking action on an operating system involves
        writing or running a shell script, retrieving specialized hardware
        information, or installing certificate data. JavaScript in any engine
        (Firefox, Safari, V8) (Google Chrome). So JavaScript programming is
        simple and works in any browser. Node JS only supports the Google Chrome
        V8 engine. However, JavaScript code may execute in any environment that
        supports the V8 engine. So it's not browser-specific. JavaScript follows
        the Java programming language standard. There may be some differences in
        the way code is written, but it still follows the Java programming
        language standard. Node JS is developed in C++ and offers a V8 engine
        based browser javascript runtime engine. To access any operating system,
        JavaScript has unique non-blocking task objects, however, they are all
        operating system specific. For example, ActiveX Control only runs on
        Windows. But Node JS can conduct non-blocking operations from any
        JavaScript programming. It doesn't contain any OS-specific constants.
        Node JS is quite comfortable with creating a particular file system
        binding and allowing developers to read or write to disk.
      </p>
      <h3>When should we use nodejs and when should we use mongodb</h3>
      <p>
        Nodejs is a Javascript engine (by programming in the Javascript
        language). It executes Javascript. It is most typically used to develop
        web servers, although it may be used for many other sorts of programs.
        It's a database engine. Some applications or server code utilizes
        MongoDB to store, query, or update data. Many nodejs web servers utilize
        MongoDB to store data. MongoDB provides an API module that runs inside a
        Nodejs application and allows us to construct databases and add queries,
        update, and remove data programmatically. MongoDB also includes API
        libraries for Python, Java, and other languages. Both technologies are
        used in distinct portions of a web server. We don't swap them. Instead,
        we may combine them.
      </p>
      <h3>Differences between SQL and NoSQL databases.</h3>
      <p>
        SQL is an abbreviation for relational database management system
        (RDBMS). SQL databases have a fixed or static schema that has been
        specified. SQL databases are not well suited for storing hierarchical
        information. SQL databases are best suited for complicated queries
        because of their flexibility. SQL is capable of being scaled vertically.
        SQL is based on the acid characteristic. <br />
        NoSQL is an acronym that stands for non-relational or distributed
        database system. NoSQL databases have a dynamic schema. NoSQL databases
        are the best choice for storing hierarchical data structures. When it
        comes to sophisticated queries, NoSQL databases are not very good. NoSQL
        database that is horizontally scalable. NoSQL Is Compliant with CAP
        (consistency, availability, partition tolerance).
      </p>
      <h3>What is the purpose of jwt and how does it work</h3>
      <p>
        JWT, or JSON Web Token, is an open standard that allows two parties — a
        client and a server — to exchange security information in a secure
        manner. Each JWT is made up of encoded JSON objects, each of which
        includes a collection of claims. To guarantee that the claims on JWTs
        cannot be changed after the token has been issued, a cryptographic
        procedure is used to sign the tokens. <br />
        Unlike other web tokens, JWTs include a collection of claims. Claims are
        used to communicate between parties. Depending on the use situation,
        these assertions vary. A claim could state who issued the token, how
        long it's valid, or what rights the client has. A JWT is a three-part
        string separated by dots (.) and serialized in base64. The JWT looks
        like this in compact serialization: xxxxx.yyyyy.zzzzz. Decoding yields
        two JSON strings: 1.Header and payload 2.Signature Token type and
        signature algorithm are specified in the JOSE (JSON Object Signing and
        Encryption) header. Claims are in the payload. To keep the JWT small,
        this is shown as a JSON string with just a dozen fields. The server
        normally uses this data to verify that the user has authorization to do
        the requested action. A JWT does not require claims, although overlying
        standards may do so. For OAuth2.0, iss, sub, aud, and exp must be
        present when using JWT as bearer access token. a few are more common.
        The signature verifies the token's authenticity. Signs the header and
        payload with a secret known to both parties, or with a private key known
        only to the sender. Using the token, the recipient validates the
        signature matches the header and payload.
      </p>
    </div>
  );
};

export default Blogs;
