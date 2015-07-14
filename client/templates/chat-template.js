Template.appChat.helpers({
	Messages: function(){

		return Messagesx.find({}, {sort: {createdAt: -1}, limit: 2}) 
	}


});

Template.appChat.events({

	"click .btnDelete": function (event) {
		Messagesx.remove(this._id);
		return false;
	},
	"keyup .txtText": function (event){
		if(event.keyCode == 13){

			Messagesx.insert({
				name: $(".txtName").val(),
				text: $(".txtText").val(),
				createdAt: new Date()
			});

			$(".txtText").val("");
			
			$(".txtText").focus();	
			
			
		}

		return false;
	}


});