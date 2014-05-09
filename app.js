(function() {

  return {
    events: {
      'app.activated':'doSomething'
    },

    doSomething: function() {
    	var ticket = this.ticket();
		ticket.assignee().user();
    	alert(ticket.assignee().user().email());
    	//alert("yo");
    	//ticket.customField("custom_field_23790083").;
    	ticket.customField("custom_field_23790083", value = ticket.assignee().user().email()); 

    }
  };

}());
