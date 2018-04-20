import React from "react";
import "./request.css";

const Request = () =>
<div>
<head>
  <meta charset="UTF-8"></meta>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
  <meta http-equiv="X-UA-Compatible" content="ie=edge"></meta>
  <title>Request a Za</title>
  <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"></link>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.css" />
  <link rel="stylesheet" href="/request.css"></link>
</head>
<body>
  <div class="container">
    <h1 class="brand"><span></span> Request a 'Za</h1>
    <div class="wrapper animated bounceInLeft">
      <div class="company-info">
        <h3>Van Gogh's Dough - Dough On Demand</h3>
        <ul>
          <li><i class="fa fa-road"></i> Richmond, VA</li>
          <li><i class="fa fa-phone"></i> (804).804.8044</li>
          <li><i class="fa fa-envelope"></i> VGDoughRVA@Gmail.com</li>
        </ul>
      </div>
      <div class="contact">
        <h3>Email Us</h3>
        {/* {{msg}} */}
        <form method="POST" action="send">
          <p>
            <label>Name</label>
            <input type="text" name="name" placeholder="Vince"></input>
          </p>
          <p>
            <label>Date/Time Needed (24 hour notice)</label>
            <input type="text" name="company" placeholder="ex: 4pm Tue May 1st"></input>
          </p>
          <p>
            <label>Email Address</label>
            <input type="email" name="email" placeholder="hungry@gmail.com"></input>
          </p>
          <p>
            <label>Phone Number</label>
            <input type="text" name="phone" placeholder="804.837.3946"></input>
          </p>
          <p class="full">
            <label>Delivery Address</label>
            <textarea name="Address" rows="2" placeholder="1800 N Boulevard, Richmond VA 23221"></textarea>
          </p>
          <p class="full">
            <label>Message</label>
            <textarea name="message" rows="5" placeholder="Really looking for a pizza that looks like charlie chaplin using olives, onions, mushrooms and spinach. Thin crust if you can and would like to get 2 of them. Red sauce and mozzarella cheese as well."></textarea>
          </p>
          <p class="full">
            <button type="submit">Submit</button>
          </p>
        </form>
      </div>
    </div>
  </div>
</body>
</div>
export default Request;