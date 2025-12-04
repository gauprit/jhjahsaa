const content = {
    cloud: {
        title: "Cloud Solution",
        desc: "Enterprise-grade cloud transformation for scalability, security, and performance. We architect, migrate, and optimize cloud environments so your organization can innovate faster, reduce cost, and operate with agility.",
        lottie: "https://lottie.host/efd65d5e-0e9b-4e1d-ba38-e72e6d6e3e49/iznk89s4ey.json"
    },
    webdev: {
        title: "Web Development",
        desc: "We create intelligent, high-performance web systems that combine advanced UI/UX, automated workflows, and AI-powered optimization. Our solutions are built to accelerate user journeys, increase conversions, and evolve with your business needs.",
        lottie: "https://lottie.host/545d4917-828f-40d8-bcc9-0e4a66e52ba6/EtBPwpLdlx.json"
    },
    automation: {
        title: "Automation Process",
        desc: "Intelligent automation that eliminates manual work and enhances operational efficiency.",
        lottie: "https://lottie.host/53bddc02-b9da-471a-94ef-f15b1e501266/ZGqBWCrJ8o.json"
    },
    hr: {
        title: "HR Solutions",
        desc: "Smart HR automation that improves hiring, onboarding, payroll, and workforce management.",
        lottie: "https://lottie.host/43240255-d1fd-448b-9ab8-efd9ab2b40a2/PimV35Qu4D.json"
    },
    data: {
        title: "Data Analytics",
        desc: "Transform raw data into actionable insights with dashboards and predictive intelligence.",
        lottie: "https://lottie.host/418214d4-961d-4a6d-ad8c-8bd368e74ce6/6Sq9cfLVlU.json"
    },
    cyber: {
        title: "Cybersecurity",
        desc: "Advanced cybersecurity solutions that safeguard your infrastructure, detect threats, and ensure business continuity.",
        lottie: "https://lottie.host/996477e1-abad-4742-9b0b-cdf92e80ff9e/EODz4IUkXk.json"
    },
    cloudsol: {
        title: "Customer Service",
        desc: "Reliable helpdesk and customer support operations powered by intelligent workflow automation.",
        svg: true
    },
    scraping: {
    title: "Web Scraping",
    desc: "Automated data extraction at scale — from eCommerce, real-estate, job portals, and financial platforms. We collect, clean, and structure real-time data to power analytics, automation, and business intelligence.",
    lottie: "https://lottie.host/d5602af9-65ab-447c-8cc2-c8eaa34b7fe0/uPbPR0QzLS.json"
}

};


const items = document.querySelectorAll(".exp-item");
const title = document.getElementById("exp-title");
const desc = document.getElementById("exp-desc");
const container = document.getElementById("expertise-content");

items.forEach(item => {
    item.addEventListener("mouseenter", () => {

        items.forEach(i => i.classList.remove("active"));
        item.classList.add("active");

        const key = item.getAttribute("data-key");
        const data = content[key];

        container.classList.add("fade");

        setTimeout(() => {

            title.textContent = data.title;
            desc.textContent = data.desc;

            // Remove old Lottie if present
            const oldLottie = document.getElementById("expertise-lottie");
            if (oldLottie) oldLottie.remove();

            // Remove old SVG if present
            const oldSvg = document.getElementById("expertise-svg-wrapper");
            if (oldSvg) oldSvg.remove();

            // If SVG item → inject SVG
            if (data.svg) {
                container.insertAdjacentHTML("beforeend", `
                <div id="expertise-svg-wrapper" class="w-full flex justify-center">
                
                  <svg id="expertise-svg" width="260" height="260" viewBox="0 0 200 200" fill="none">

                    <circle cx="100" cy="100" r="85"
                            stroke="#22D3EE" stroke-width="4" opacity="0.35"/>

                    <path d="M60 100C60 72 82 50 110 55C134 60 145 80 145 100"
                          stroke="#22D3EE" stroke-width="6" stroke-linecap="round" opacity="0.85"/>

                    <circle cx="55" cy="105" r="12"
                            stroke="#22D3EE" stroke-width="4" fill="none"/>

                    <circle cx="145" cy="105" r="12"
                            stroke="#22D3EE" stroke-width="4" fill="none"/>

                    <path d="M135 135C135 145 125 150 115 150H90"
                          stroke="#22D3EE" stroke-width="5" stroke-linecap="round"/>

                    <circle cx="100" cy="100" r="40"
                            stroke="#22D3EE" stroke-width="4"/>

                  </svg>
                </div>
                `);
            } 
            
            else {
                // Otherwise load Lottie
                const newLottie = document.createElement("lottie-player");
                newLottie.setAttribute("id", "expertise-lottie");
                newLottie.setAttribute("src", data.lottie);
                newLottie.setAttribute("background", "transparent");
                newLottie.setAttribute("speed", "1");
                newLottie.setAttribute("loop", "");
                newLottie.setAttribute("autoplay", "");
                newLottie.style.width = "100%";
                newLottie.style.height = "300px";

                container.appendChild(newLottie);
            }

            container.classList.remove("fade");

        }, 200);
    });
});

