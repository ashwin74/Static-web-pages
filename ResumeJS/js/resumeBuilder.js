var bio =  {
				"name" : "Ashwin P",
				"role" : "Web Developer",
				"welcomeMessage" : "Hello, This is my Awesome resume. I hope after going through my work and achievement you will consider me as your potential employee. I am a hardworking, passionate web Developer who always want to learn new and awesome technologies.", 
				"image" : "images/ash.jpg",
				"contacts" : [
								{	"mobile" : "9645703342",
									"skype" : "ashwin74", 
									"location" : "Kerala",
									"email" : "ashwin7411@gmail.com"
								}
							],	
				"skills" : ["Web development","Android","Prototyping","Python"]
			};

var work = {	
				"jobs" : [
							{
								"employer" : "Oyo Rooms", 
								"title" : "Web Designer",
								"dates" : "2018-2019",
								"location" : "Bombay",
								"description" : "At Oyo Rooms, I had worked as an intern Web Designer and Prototyper."
							},
							{
								"employer" : "Snapdeal", 
								"title" : "Front-End Web Developer",
								"dates" : "2019 - 2021",
								"location" : "Bangalore",
								"description" : "At Snapdeal, I had worked as a Front-End Web Developer, have worked using Bootstrap."	
							}
						]
			};

var projects = {
					"project" : [
									{
										"title" : "Trippin",
										"dates" : "2017", 
										"description" : "Trippin is a travel app built in both on android platform as well as a website. Trippin is a user based app that show the user the best places to visit in a city in a given time with a least budget, it also have a Business class feature.", 
										"images" : ["images/1.jpg","images/2.jpg","images/3.jpg","images/4.jpg"]
									},
									{
										"title" : "Pinit",
										"dates" : "2018", 
										"description" : "Pinit is a photosharing and photocollecting as well as cloud photo-management app running on Android.", 
										"images" : ["images/11.jpg","images/22.jpg","images/33.jpg","images/44.jpg"]
									}
								]
				};

var education = {	"schools" : [
									{
										"name" : "Kendriya Vidyalaya Kannur",
										"location" : "Kannur, Kerala",
										"degree" : "High school", 
										"majors" : "Science",
										"dates" : "2013-2015",
										"url" : "www.kenvidkannur.org"
									},
									{
										"name" : "College of Engineering Trikaripur",
										"location" : "Cheemeni, Kerala",
										"degree" : "Bachaelor", 
										"majors" : "Computer Science",
										"dates" : "2015-2019",
										"url" : "www.cetkr.ac.in"
									}
								],
					"online courses" : [
											{
												"title" : "Front-End Web Developer Nanodegree",
												"school" : "Udacity",
												"dates" : "2016 - 2017",
												"url" : "https://www.udacity.com/course/nd001"
											}
										]
				};


bio.display = function() 
{
	var formattedName = HTMLheaderName.replace("%data%",bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
	var formattedImage = HTMLbioPic.replace("%data%",bio.image);
	var formattedMessage = HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage);
	$("#header").prepend(formattedRole).prepend(formattedName).append(formattedImage,formattedMessage);
	$("#header").append(HTMLskillsStart);

	for(skill in bio.skills) 
	{
		var formattedSkills = HTMLskills.replace("%data%",bio.skills[skill]);
		$("#skills").append(formattedSkills);
	};

	for(contact in bio.contacts) 
	{
		var formattedMobile = HTMLmobile.replace("%data%",bio.contacts[contact].mobile);
		var formattedEmail = HTMLemail.replace("%data%",bio.contacts[contact].email);
		var formattedSkype = HTMLcontactGeneric.replace("%contact%","skype").replace("%data%",bio.contacts[contact].skype);
		$("#footerContacts").append(formattedMobile,formattedEmail,formattedSkype);
	};
};

education.display = function() 
{
	for(school in education.schools) 
	{
		$("#education").append(HTMLschoolStart);
		var formattedName = HTMLschoolName.replace("%data%",education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
		var formattedDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
		var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
		var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors);
		$(".education-entry:last").append(formattedName + formattedDegree,formattedDates,formattedLocation,formattedMajor);
	}
};

function displayWork() 
{
		for (job in work.jobs) 
		{
		//create a new div for work experience
			$("#workExperience").append(HTMLworkStart);
		//concat employer and title
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			$(".work-entry:last").append(formattedEmployerTitle);

			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			$(".work-entry:last").append(formattedDates);
			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			$(".work-entry:last").append(formattedDescription);
		}
}
displayWork();

/* ---OTHER OPTION OF USING FUCTIONS IN JAVASCRIPT.---

work.display = function() {
	for(job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		
		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
		var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
		var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);

		$(".work-entry:last").append(formattedEmployer + formattedTitle,formattedDates,formattedDescription);
	}
};*/

projects.display = function()
{
	for(item in projects.project)
	{
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%",projects.project[item].title);
		var formattedDates = HTMLprojectDates.replace("%data%",projects.project[item].dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%",projects.project[item].description);
		$(".project-entry:last").append(formattedTitle,formattedDates,formattedDescription);
		
		for (image in projects.project[item].images)
	    {
			var formattedImage = HTMLprojectImage.replace("%data%",projects.project[item].images[image]);
			$(".project-entry:last").append(formattedImage);
		};
	}
};

// - Collecting Click Locations.
$(document).click(function(loc) {
									var x = loc.pageX;
									var y = loc.pageY;

									logClicks(x,y);
								}
				);

// - Internationalize the content
function inName(name)
{
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	
	return name[0] +" "+name[1];
};


//work.display();
projects.display();
education.display();
bio.display();

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);