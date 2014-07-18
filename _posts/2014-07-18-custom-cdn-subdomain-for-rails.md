---
layout: post
title: "Custom CDN subdomain for Rails"
date: 2014-07-18
---

##AWS CloudFront
This post is for those looking to use a custom subdomain with <abbr title="Amazon Web Services">AWS</abbr> and Ruby on Rails. This post isn't going to lecture you on why you should be using CDNs.

Implementing a CDN with Rails for assets in production couldn't be any easier. First of all you'll want to create an account with [AWS](http://aws.amazon.com/ "Amazon Web Services").

After signing up you'll want to select 'CloudFront' from the Services dropdown:

![AW CloudFront](http://f.cl.ly/items/0i2a3g0G1J1p0o0P0u0Z/Screen%20Shot%202014-07-18%20at%2009.34.35.png)

Next you'll want to create the 'Create Distribution' button and choose Web for the delivery method.

![Create Distribution](http://f.cl.ly/items/2E2t3s2E0t1w3j3l2J0L/Screen%20Shot%202014-07-18%20at%2009.40.24.png)

![Delivery method: Web](http://f.cl.ly/items/3K1b0Y3k361k1e2A0W3l/Screen%20Shot%202014-07-18%20at%2009.42.04.png)

Next you'll want to enter the 'Origin Domain Name' for your website and ignore the 'Origin ID' input. Below you can see the example 'codethisway.com':

![Origin Domain Name: codethisway.com](http://f.cl.ly/items/3D0G3t351N2z0C2G1x1W/Screen%20Shot%202014-07-18%20at%2009.44.59.png)

Leave the 'Default Cache Behaviour Settings' and save the settings. You'll be redirected to your distributions list which will now contain the domain you just added. You'll want to take a note of the 'Domain Name' provided:

![Domain Name](http://cl.codethisway.com/image/2H0z3W0E2s34/Screen%20Shot%202014-07-18%20at%2009.48.41.png)

That's the first part complete.

##Domain Registrar
Next you'll want to head over to your domain registrar. I'm using [DNSimple](https://dnsimple.com/r/7e1938bb1a6266 "DNSimple") (We'll both get one month free using that referral URL).

The process of setting up a CNAME is fairly straight forward in most registrars so the following should be easy to configure.

If you already have a domain setup you wish to add a subdomain to for your CDN, you'll want to click 'Manage' otherwise click 'Add Domain'.

Look for 'DNS Records' and click on 'Edit':

![Edit DNS Records](http://cl.codethisway.com/image/2o0v3l0M2313/Screen%20Shot%202014-07-18%20at%2009.56.37.png)

Next from the 'Add Record' dropdown choose 'CNAME':

![Add CNAME Record](http://cl.codethisway.com/image/0J3O3v410d3T/Screen%20Shot%202014-07-18%20at%2009.57.43.png)

You'll then want to choose a subdomain for your CDN and copy in your 'CloudFront Domain Name' from earlier. The most popular subdomains I've seen are 'cdn.' and 'assets.'.

![Name and Alias for CNAME](http://cl.codethisway.com/image/0G1t1X3A0E1M/Screen%20Shot%202014-07-18%20at%2010.00.47.png)

Take note of your alias and save those settings.

##Rails
Open your Ruby on Rails application in your text editor and locate `config/environments/production.rb`. Then you'll want to add the following code (using your own CNAME):

`
config.action_controller.asset_host = "cdn.codethisway.com"
`

That's it! AWS CloudFront will grab your assets when you browse to your application in production and serve through your CDN.

If you're not a fan of this method you can also `bundle` [Asset Sync](https://github.com/rumblelabs/asset_sync) gem but I've seen better performance results in my application using the above method.
