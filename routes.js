const routes=require('next-routes')();

routes.add('/campaigns/new','campaigns/new')
routes.add('/campaigns/:address','campaigns/show');
//export helpers to allow navigation around the application
module.exports=routes;
