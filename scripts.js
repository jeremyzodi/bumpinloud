$(document).ready(function(){
	$('#signout').on('click', function() {
		$(this).remove();
		$('#account').remove();
		$('#title').text("Welcome to Bumpin' Loud");
		var b1=$('<input/>').attr({
                      type: "button",
                      id: "createAccount",
                      value: "Create an Account"
                  });
		/*var r = $('<input type="button" value="Create an Account"/>');*/
        $('#trButtons').append(b1);

        var b2=$('<input/>').attr({
                      type: "button",
                      id: "signIn",
                      value: "Sign In"
                  });
        $('#trButtons').append(b2);
	});
});