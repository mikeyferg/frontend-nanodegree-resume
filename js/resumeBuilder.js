
/*---------------------Begin creating 4 JSON objects  ------------------------- */
/* -------------------Begin work object -----------------------------------------*/
var work = {
	"jobs": [
		{
			"employer": "Swoopt",
			"title" : "Co-founder",
			"location": "San Francisco",
			"dates": "2012-2014",
			"description": "A fantasy sports startup."
		},
		{
			"employer": "Geomium",
			"title" : "Co-founder",
			"location": "London, UK",
			"dates": "2010-2012",
			"description": "A local social mobile app."
		}
	],
	displayWork: function() {
		for(job in work.jobs) {
			$("#workExperience").append(HTMLworkStart);
			var formattedHTMLworkEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
			var formattedHTMLworkTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);
			var formattedHTMLworkDates = HTMLworkDates.replace('%data%', work.jobs[job].dates);
			var formattedHTMLworkLocation = HTMLworkLocation.replace('%data%', work.jobs[job].location);
			var formattedHTMLworkDescription = HTMLworkDescription.replace('%data%', work.jobs[job].description);

			var concatWork = formattedHTMLworkEmployer + formattedHTMLworkTitle + formattedHTMLworkDates + formattedHTMLworkLocation + formattedHTMLworkDescription;
			$('.work-entry:last').append(concatWork);
		}
	}
}
/*---------------------------End work object -----------------------------------*/
/*----------------------------Begin project object------------------------------ */
var projects = {
	"project": [
		{
			"title": "JS Resume",
			"dates": "September 2014",
			"description": "JS powered resume builder.",
			"image": "http://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Udacity_Logo.svg/939px-Udacity_Logo.svg.png"
		},
		{
			"title": "Shopping List App",
			"dates": "September 2014",
			"description": "Porfolio website created for Thinkful FEWD class.",
			"image": "http://mikeyferg.com/images/shoppingApp.png"
		}
	],
	displayProjects: function() {
		for(project in projects.project) {
			$("#projects").append(HTMLprojectStart);
			var formattedHTMLprojectTitle = HTMLprojectTitle.replace('%data%', projects.project[project].title);
			var formattedHTMLprojectDates = HTMLprojectDates.replace('%data%', projects.project[project].dates); 
			var formattedHTMLprojectDescription = HTMLprojectDescription.replace('%data%', projects.project[project].description);
			var formattedHTMLprojectImage = HTMLprojectImage.replace('%data%', projects.project[project].image)
			var concatProjects = formattedHTMLprojectTitle + formattedHTMLprojectDates + formattedHTMLprojectDescription + formattedHTMLprojectImage;
			$('.project-entry:last').append(concatProjects);
		}
	}			
}
/*-----------------------------End project object ----------------------------- */
/*-----------------------------Begin bio object ---------------------------------*/
var bio = {
	"name": "Mike Ferg",
	"role": "Web Developer",
	"picUrl": "http://appthegame.co/Home_files/shapeimage_11.png", 
	"welcomeMessage": "Welcome to my resume!",
	"contacts": {
		"mobile": "444-444-4444",
		"email": "asdfdaf@gmail.com",
		"github" :"http://github.com/mikeyferg",
		"location": "San Francisco"
	},
	"skills": [
		"Programmer", "Biz Guy"
	],
	displayNameRole: function() {
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		$("#header").prepend(formattedName, formattedRole);
	},
	displayContacts: function() {
		var formattedHTMLmobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
		var formattedHTMLemail = HTMLemail.replace('%data%', bio.contacts.email);
		var formattedHTMLgithub = HTMLgithub.replace('%data%', bio.contacts.github);
		var formattedHTMLlocation = HTMLlocation.replace('%data%', bio.contacts.location)
		$('#topContacts').append(formattedHTMLmobile, formattedHTMLemail, formattedHTMLgithub, formattedHTMLlocation);
	},
	displayBioPic: function() {
		var formattedHTMLbioPic = HTMLbioPic.replace('%data%', bio.picUrl);
		$('#header').append(formattedHTMLbioPic);
	},
	displayWelcome: function() {
		var formattedHTMLWelcomeMsg = HTMLWelcomeMsg.replace('%data%', bio.welcomeMessage);
		$('#header').append(formattedHTMLWelcomeMsg);
	},
	displaySkills: function() {
		if (bio.skills.length > 0) {
			$('#header').append(HTMLskillsStart);
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
			$('#skills').append(formattedSkill);
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
			$('#skills').append(formattedSkill);
		}
	}
}
/*---------------------------------End bio object ------------------------------- */
/* --------------------------------Begin education object------------------------- */
var education = {
	"schools" : [
		{
			"name": "University of Oxford",
			"location": "Oxford, UK",
			"degree": "MBA",
			"majors": [
				"Entrepreneurship", "Technology"
			],
			"dates": "2008-2009",
			"url": "http://www.ox.ac.uk"
		},
		{
			"name": "University of Michigan",
			"location": "Ann Arbor, MI",
			"degree": "LSA",
			"majors": [
				"Economics", "Business"
			],
			"dates": "2001-2005",
			"url": "http://www.umich.edu"
		}
	],
	"onlineCourse": [
		{
			"title": "JS Basics",
			"school": "Udacity",
			"dates": "September 2014",
			"url": "http://www.udacity.com"
		},
		{
			"title": "FEWD",
			"school": "Thinkful",
			"dates": "July- October 2014",
			"url": "http://www.thinkful.com"
		}
	],
	displaySchools: function() {
		for (school in education.schools) {
			$('#education').append(HTMLschoolStart);
			var formattedHTMLschoolName = HTMLschoolName.replace('%data%', education.schools[school].name);
			var formattedHTMLschoolDegree = HTMLschoolDegree.replace('%data%', education.schools[school].degree);
			var formattedHTMLschoolMajor = HTMLschoolMajor.replace('%data%', education.schools[school].majors);
			var formattedHTMLschoolLocation = HTMLschoolLocation.replace('%data%', education.schools[school].location);
			var formattedHTMLschoolDates = HTMLschoolDates.replace('%data%', education.schools[school].dates);
			$('.education-entry:last').append(formattedHTMLschoolName + formattedHTMLschoolDegree + formattedHTMLschoolLocation + formattedHTMLschoolDates + formattedHTMLschoolMajor);
		}
	},
	displayOnline: function() {
		$('.education-entry:last').append(HTMLonlineClasses);
		for (onlineCourse in education.onlineCourse) {
			
			var formattedHTMLonlineTitle = HTMLonlineTitle.replace('%data%', education.onlineCourse[onlineCourse].title);
			var formattedHTMLonlineSchool = HTMLonlineSchool.replace('%data%', education.onlineCourse[onlineCourse].school);
			var formattedHTMLonlineDates = HTMLonlineDates.replace('%data%', education.onlineCourse[onlineCourse].dates);
			var formattedHTMLonlineURL = HTMLonlineURL.replace('%data%', education.onlineCourse[onlineCourse].url);
			
			$('.education-entry:last').append(formattedHTMLonlineTitle + formattedHTMLonlineSchool + formattedHTMLonlineDates + formattedHTMLonlineURL);
		}
	}
}
/*-------------------------End education object --------------------------------*/

/*--------------------End creating 4 JSON objects ---------------------------- */



/*--------------------- calling work.displayWork() method ------------------------------------ */
work.displayWork(); 

/*----------------------calling projects.displayProjects() method -------------------------------------- */
projects.displayProjects();


/*------------------------ Bio Methods -------------------------------- */
	/*----------------------calling bio.displayBio() method -------------------------------------- */
	bio.displayNameRole();

	/*----------------------calling bio.displayContacts() method -------------------------------------- */
	bio.displayContacts();
	/*----------------------calling bio.displayBioPic() method -------------------------------------- */
	bio.displayBioPic();
	/*----------------------calling bio.displayWelcome() method -------------------------------------- */
	bio.displayWelcome();	
	/*----------------------calling bio.displaySkills() method -------------------------------------- */
	bio.displaySkills();


/*---------------------------Education Methods ------------------------------ */
	/*-----------------------calling education.displaySchools() method ------------------ */
	education.displaySchools();
	/*-----------------------calling education.displayOnline() method ------------------ */
	education.displayOnline();







/*----------------------Begin handler to show locations of mouse clicks --------------------------------- */
$(document).click(function(loc) { 
	var x = loc.pageX;
	var y= loc.pageY;
	logClicks(x,y);
});
/*-------------------- End handler to show locations of mouse clicks --------------------------------- */

/*-------------------------- Begin Add name internationalize button and internationalize name --------------------*
$("#main").append(internationalizeButton);
	var inName = function(name) {
		var nameArray = name.split(" ");
		var firstName = nameArray[0].slice(0,1).toUpperCase() + nameArray[0].slice(1);
		var secondName = nameArray[1].toUpperCase();
		return (firstName + " " + secondName);	
}
/*---------------------------End add name internationalization button and internationalize name */

$('#mapDiv').append(googleMap);



