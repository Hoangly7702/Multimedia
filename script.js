
const member = [
    {
        ten: 'Cù Vĩnh Lộc',
        "hoc-vi": "Tiến sĩ, giảng viên chính",
        "chuc-vu": "Cố vấn",
        "mo-ta": 'Tiến sĩ Khoa học Máy tính - Pháp Chứng chỉ công nghệ: J2EE và.NET - Ấn Độ; Trí tuệ nhân tạo & Máy học; Blockchain; Công nghệ: C#, Advanced .NET 2003, HTML/ XML/JSON'
    },
    {
        ten: 'Cù Vĩnh Lộc',
        "hoc-vi": "Tiến sĩ, giảng viên chính",
        "chuc-vu": "Cố vấn",
        "mo-ta": 'Tiến sĩ Khoa học Máy tính - Pháp Chứng chỉ công nghệ: J2EE và.NET - Ấn Độ; Trí tuệ nhân tạo & Máy học; Blockchain; Công nghệ: C#, Advanced .NET 2003, HTML/ XML/JSON'
    },
    {
        ten: 'Cù Vĩnh Lộc',
        "hoc-vi": "Tiến sĩ, giảng viên chính",
        "chuc-vu": "Cố vấn",
        "mo-ta": 'Tiến sĩ Khoa học Máy tính - Pháp Chứng chỉ công nghệ: J2EE và.NET - Ấn Độ; Trí tuệ nhân tạo & Máy học; Blockchain; Công nghệ: C#, Advanced .NET 2003, HTML/ XML/JSON'
    },
    {
        ten: 'Cù Vĩnh Lộc',
        "hoc-vi": "Tiến sĩ, giảng viên chính",
        "chuc-vu": "Cố vấn",
        "mo-ta": 'Tiến sĩ Khoa học Máy tính - Pháp Chứng chỉ công nghệ: J2EE và.NET - Ấn Độ; Trí tuệ nhân tạo & Máy học; Blockchain; Công nghệ: C#, Advanced .NET 2003, HTML/ XML/JSON'
    },
    {
        ten: 'Cù Vĩnh Lộc',
        "hoc-vi": "Tiến sĩ, giảng viên chính",
        "chuc-vu": "Cố vấn",
        "mo-ta": 'Tiến sĩ Khoa học Máy tính - Pháp Chứng chỉ công nghệ: J2EE và.NET - Ấn Độ; Trí tuệ nhân tạo & Máy học; Blockchain; Công nghệ: C#, Advanced .NET 2003, HTML/ XML/JSON'
    },
    {
        ten: 'Cù Vĩnh Lộc',
        "hoc-vi": "Tiến sĩ, giảng viên chính",
        "chuc-vu": "Cố vấn",
        "mo-ta": 'Tiến sĩ Khoa học Máy tính - Pháp Chứng chỉ công nghệ: J2EE và.NET - Ấn Độ; Trí tuệ nhân tạo & Máy học; Blockchain; Công nghệ: C#, Advanced .NET 2003, HTML/ XML/JSON'
    },
    {
        ten: 'Cù Vĩnh Lộc',
        "hoc-vi": "Tiến sĩ, giảng viên chính",
        "chuc-vu": "Cố vấn",
        "mo-ta": 'Tiến sĩ Khoa học Máy tính - Pháp Chứng chỉ công nghệ: J2EE và.NET - Ấn Độ; Trí tuệ nhân tạo & Máy học; Blockchain; Công nghệ: C#, Advanced .NET 2003, HTML/ XML/JSON'
    },
    {
        ten: 'Cù Vĩnh Lộc',
        "hoc-vi": "Tiến sĩ, giảng viên chính",
        "chuc-vu": "Cố vấn",
        "mo-ta": 'Tiến sĩ Khoa học Máy tính - Pháp Chứng chỉ công nghệ: J2EE và.NET - Ấn Độ; Trí tuệ nhân tạo & Máy học; Blockchain; Công nghệ: C#, Advanced .NET 2003, HTML/ XML/JSON'
    },
    {
        ten: 'Cù Vĩnh Lộc',
        "hoc-vi": "Tiến sĩ, giảng viên chính",
        "chuc-vu": "Cố vấn",
        "mo-ta": 'Tiến sĩ Khoa học Máy tính - Pháp Chứng chỉ công nghệ: J2EE và.NET - Ấn Độ; Trí tuệ nhân tạo & Máy học; Blockchain; Công nghệ: C#, Advanced .NET 2003, HTML/ XML/JSON'
    },
]



const teamMembers = document.querySelectorAll('.team-member');
// Modal functionality
const modal = document.getElementById('memberModal');
const memberDetails = document.getElementById('memberDetails');
function openModal(index) {
    const teamMember = teamMembers[index];
    const imgSrc = teamMember.querySelector('img').src;
    const imgAlt = teamMember.querySelector('img').alt;
    const main = document.querySelector("main");

    main.classList.add("blur")

    memberDetails.innerHTML = `
                <img src="${imgSrc}" alt="${imgAlt}" class="modal-image">
                <div class="model-text"> 
                    <h2>${member[index]["ten"]}</h2>
                    <p>  
                        <span> <b>Học vị:</b> ${member[index]["hoc-vi"]}</span> 
                        <span> <b>Chức vụ:</b> ${member[index]["chuc-vu"]} </span>
                        <span> ${member[index]["mo-ta"]}
                            </span>

 </p>
                </div>
            `;
    modal.style.display = 'block';
}

// Close modal function
function closeModal() {
    modal.style.display = 'none';
    const main = document.querySelector("main");

    main.classList.remove("blur")
}

document.addEventListener('DOMContentLoaded', () => {
    let currentSlide = 0;
    const teamSlider = document.querySelector('.team-slider');
    const membersPerSlide = 4;
    const totalMembers = teamMembers.length;
    const slideWidth = teamMembers[0].offsetWidth * membersPerSlide;

    function updateSlide() {
        const offset = currentSlide * -slideWidth;
        teamSlider.style.transform = `translateX(${offset}px)`;
    }

    function changeSlide(direction) {
        currentSlide += direction;
        if (currentSlide < 0) {
            currentSlide = Math.ceil(totalMembers / membersPerSlide) - 1;
        } else if (currentSlide >= Math.ceil(totalMembers / membersPerSlide)) {
            currentSlide = 0;
        }
        updateSlide();
    }

    cloneSlides();

    document.querySelector('.prev').addEventListener('click', () => changeSlide(-1));
    document.querySelector('.next').addEventListener('click', () => changeSlide(1));

    // Open modal function

    // Close modal when clicking outside the modal content
    window.onclick = function (event) {
        if (event.target === modal) {
            closeModal();
        }
    };

    function cloneSlides() {
        const firstThreeClones = Array.from(teamMembers).slice(0, 3).map(member => member.cloneNode(true));
        firstThreeClones.forEach(clone => teamSlider.appendChild(clone));
    }

    // Update slide initially
    updateSlide();
});
