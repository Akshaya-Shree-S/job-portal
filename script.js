// Get job from URL
const params = new URLSearchParams(window.location.search);
const job = params.get("job");

// Job data
const jobs = {
    frontend: {
        title: "Frontend Developer",
        company: "ABC Tech",
        location: "Hyderabad",
        salary: "5 LPA",
        description: "Looking for HTML, CSS, JS and React developer."
    },
    backend: {
        title: "Backend Developer",
        company: "XYZ Pvt Ltd",
        location: "Bangalore",
        salary: "6 LPA",
        description: "Looking for Python, SQL, API development skills."
    },
    ui: {
        title: "UI Designer",
        company: "Creative Studio",
        location: "Chennai",
        salary: "4 LPA",
        description: "Looking for Figma, UX, and design skills."
    }
};

// Load job details
const selectedJob = jobs[job];

if (selectedJob) {
    document.getElementById("job-title").innerText = selectedJob.title;
    document.getElementById("company").innerText = selectedJob.company;
    document.getElementById("location").innerText = selectedJob.location;
    document.getElementById("salary").innerText = selectedJob.salary;
    document.getElementById("description").innerText = selectedJob.description;
}

function applyJob() {
    alert("Application submitted successfully!");
}