//Here there is the Array where I store all my favourite quotes.
var quotations = [
	{
		"quotation": "I was thrown out of college for cheating on the metaphysics exam. I looked into the soul of the boy sitting next to me.",
		"author": "Woody Allen"
	},
	{
		"quotation": "My one regret in life is that I am not someone else.",
		"author": "Woody Allen"
	},
	{
		"quotation": "My fake plants died because I did not pretend to water them.",
		"author": "Mitch Hedberg"
	},
	{
		"quotation": "A bargain is something you don’t need at a price you can’t resist.",
		"author": "Franklin Jones"
	},
	{
		"quotation": "Knowledge is knowing a tomato is a fruit; wisdom is not putting it in a fruit salad.",
		"author": "Miles Kington"
	},
	{
		"quotation": "An aphorism can never be the whole truth; it is either a half-truth or a truth-and-a-half.",
		"author": "Karl Kraus"
	},
	{
		"quotation": "Where do I find the time for not reading so many books?",
		"author": "Karl Kraus"
	},
	{
		"quotation": "A day without sunshine is like, you know, night.",
		"author": "Steve Martin"
	},
	{
		"quotation": "A child of five would understand this. Send someone to fetch a child of five.",
		"author": "Groucho Marx"
	},
	{
		"quotation": "I've had a perfectly wonderful evening. But this wasn't it.",
		"author": "Groucho Marx"
	},
	{
		"quotation": "I refuse to join any club that would have me as a member.",
		"author": "Groucho Marx"
	},
	{
		"quotation": "She got her looks from her father. He's a plastic surgeon.",
		"author": "Groucho Marx"
	},
	{
		"quotation": "Patience is something you admire in the driver behind you, but not in one ahead.",
		"author": "Bill McGlashen"
	},
	{
		"quotation": "Always remember that you are absolutely unique. Just like everyone else.",
		"author": "Margaret Mead"
	},
	{
		"quotation": "If you steal from one author, it's plagiarism; if you steal from many, it's research.",
		"author": "Wilson Mizner"
	},
	{
		"quotation": "I would never die for my beliefs because I might be wrong.",
		"author": "Bertrand Russell"
	},
	{
		"quotation": "A diplomat is a person who can tell you to go to hell in such a way that you actually look forward to the trip.",
		"author": "Caskie Stinnett"
	},
	{
		"quotation": "All generalizations are false, including this one.",
		"author": "Mark Twain"
	},
	{
		"quotation": "Be careful about reading health books. You may die of a misprint.",
		"author": "Mark Twain"
	},
	{
		"quotation": "Get your facts first, and then you can distort them as much as you please.",
		"author": "Mark Twain"
	},
	{
		"quotation": "I always wanted to be somebody, but now I realize I should have been more specific.",
		"author": "Lily Tomlin"
	},
	{
		"quotation": "I would choose Heaven for climate, but Hell for companionship.",
		"author": "Mark Twain"
	},
	
	{
		"quotation": "Never argue with idiots they'll drag you down to their level and beat you with experience",
		"author": "Mark Twain"
	},
	{
		"quotation": "Always borrow money from a pessimist, he won't expect it back.",
		"author": "Oscar Wilde"
	},
	{
		"quotation": "Be yourself, everyone else is already taken.",
		"author": "Oscar Wilde"
	},
	{
		"quotation": "All the things I really like to do are either illegal, immoral, or fattening.",
		"author": "Alexander Woollcott"
	},
];
$(document).ready(function(){
var qIndex;
// I need to redirect the user to the quote they want to read completely, as in Twitter it was truncated.
var parameter = {};// This is a very useful function to get the URL parameters. I found it @ http://snipplr.com/view/19838/get-url-parameters/
function getUrlParams() { 
var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(param,i,value) {
parameter[i] = value;
});
return parameter;
}
var myResult = getUrlParams()["id"];
if (!isNaN(myResult) && (myResult >= 0) && (myResult < quotations.length)) // In this way I avoid errors due to non-handled parameters.
{	
        qIndex = myResult;

		$('#forQuotation').text(quotations[qIndex].quotation);
		$('#forAuthor').text(quotations[qIndex].author);
		
		$('#quoteGen').click( function(){
		qIndex = Math.floor(Math.random()*quotations.length);

			$('#forQuotation').text(quotations[qIndex].quotation);
			$('#forAuthor').text(quotations[qIndex].author);
});

}
else
{


		qIndex = Math.floor(Math.random()*quotations.length);

		$('#forQuotation').text(quotations[qIndex].quotation);
		$('#forAuthor').text(quotations[qIndex].author);
	
		$('#quoteGen').click( function(){
		qIndex = Math.floor(Math.random()*quotations.length);

			$('#forQuotation').text(quotations[qIndex].quotation);
			$('#forAuthor').text(quotations[qIndex].author);
});


}

	$('#twitterBt').click( function(){
		var forTweet = quotations[qIndex].quotation + " (" + quotations[qIndex].author + ") @grafercode";
		var newTweet = "http://twitter.com/home/?status=" + forTweet; 
		
		if (forTweet.length < 141)
		{
			window.open(newTweet, "_blank");
			
		}
		else // If my quote and specifications is longer than 140 chars, it will be truncated
		{
			var forTweet1 = "";
			var i = 0;
			var tempArr = quotations[qIndex].quotation.split(" ");
			while(forTweet1.length < 60)  
			 {
				 forTweet1 = forTweet1 + tempArr[i] + " "; // In this way the truncated will end with a whole word.
				 i++;
			 }
			 var newTweet1 = "http://twitter.com/home/?status=" + forTweet1.slice(0,-1) + "... Continue reading @ http://grafercode.com?id=" + qIndex + " (" + quotations[qIndex].author + ") @grafercode" ; // slice(0, -1) just to take of the last blank space before adding ...
			
			window.open(newTweet1, "_blank");
		}
		
		
});

});
