/*
                Request Message                     
    ________________________________________
   |                                        |           
   |    METHOD                              |          
   |  ---------> GET  /contact  HTTP/1.1    |
   |                   ↑                    |
   |                  URL                   |
   |                   Headers              |
   |                Body (optional)         |
   |________________________________________|

   --------------------------------------------------
  | Request URL: https://www.course-api.com/slides   |
  | Request Method: GET                              |
  | Satus Code: 200  OK                              |
  | Remote Address: 138.68.239.6:443                 |
  | Referrer Policy: strict-origin-when-cross-origin |
   --------------------------------------------------
                  Headers
   --------------------------------------
  | Pragma: no-chace                     |
  | Referer: http://www.course-api.com/  |
   --------------------------------------
                  Body
   --------------------------------------
  | ▼ Request Payload       view source  |
  |   ▼ {email: "hello@hello.com"}       |
  |       email: "hello@hello.com"       |
   --------------------------------------


                Rsponse Message                     
    ________________________________________
   |                                        |
   |                            Status Text |         
   |    HTTP/1.1    200    OK   <---------- |          
   |                 ↑                      |
   |            Status Code                 | 
   |          Headers                       |
   |     Body (optional)                    |
   |________________________________________|

   ---------------------------------------------------------------------------------
  | Request URL: https://serverless-functions-course.netlify.app/api/6-newsletter   |
  | Request Method: POST                                                            |
  | Satus Code: 400                                                                 |
  | Remote Address: 104.248.78.24:443                                               |
  | Referrer Policy: strict-origin-when-cross-origin                                |
   ---------------------------------------------------------------------------------
      → 443 : HTTP Secure (HTTPS) HTTP over TLS/SSL

                  Headers
   ----------------------------------------
  | Content-Type: text/html; charset=UTF-8 |
   ----------------------------------------

   -----------------------------------------------
  | Content-Type: application/json; charset=UTF-8 |
   -----------------------------------------------

                            Body
   --------------------------------------------------------------
  | <!DOCTYPE html>                                              |
  | <html lang="en">                                             |
  |     <head>                                                   |
  |         <meta charset="UTF-8"/>                              |
  |         <meta name="viewport" content="width=device-width"/> |
  |         <title>Slides</title>                                |
  |         <link rel="stylesheet" href="./styles.css"/>         |
  |     </head>                                                  |
  |     <body>                                                   |
   --------------------------------------------------------------

   ----------------------------------------------------------------------------
  | [{id: "rec6d6T3q5EBIdCfD", name: "Best of Paris in 7 Days Tour", ...},...] |
  | {id: "rec6d6T3q5EBIdCfD", name: "Best of Paris in 7 Days Tour", ...}       |
  |    .                                                                       |
  |    .                                                                       |
  |    .                                                                       |
  |    .                                                                       |
   ----------------------------------------------------------------------------



   ---------------------------
   400 - error
   404 - not found
   200 - ok
*/