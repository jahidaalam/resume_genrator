// cv form
addAcadamicQualification = () => {
    // creating
    let textAria = document.createElement('textarea');
    textAria.classList.add('form-control');
    textAria.classList.add('my-2');
    textAria.classList.add('qualificationF');
    // textAria.setAttribute('class', 'form-control my-2');
    textAria.setAttribute('placeholder', 'Enter here');
    textAria.setAttribute('name', 'acadamicQualification');

    // adding node
    let divObj = document.getElementById('ac-q');
    let btnObj = document.getElementById('addQualiButton');
    divObj.insertBefore(textAria, btnObj);
};

addSkills = () => {
    // creating
    let textAria = document.createElement('textarea');
    textAria.classList.add('form-control');
    textAria.classList.add('mt-2');
    textAria.classList.add('skillsF');
    // textAria.setAttribute('class', 'form-control my-2');
    textAria.setAttribute('placeholder', 'Enter here');
    textAria.setAttribute('name', 'addLinks');

    // adding node
    let divObj = document.getElementById('skill');
    let btnObj = document.getElementById('addSkillButton');
    divObj.insertBefore(textAria, btnObj);
}


// cv template
genrateCv = () => {
    console.log('Genrating Resume');
    // name
    document.getElementById('userNamePersonal').innerHTML = document.getElementById('name').value;
    document.getElementById('userNameProfessional').innerHTML = document.getElementById('name').value;
    // contect
    document.getElementById('telNo').innerHTML = document.getElementById('teliphone').value;
    document.getElementById('addressT').innerHTML = document.getElementById('address').value;
    // link
    document.getElementById('fb-link').innerHTML = document.getElementById('facebook-link').value;
    document.getElementById('insta-link').innerHTML = document.getElementById('instagram-link').value;
    document.getElementById('din-link').innerHTML = document.getElementById('linkdin-link').value;
    document.getElementById('hub-link').innerHTML = document.getElementById('github-link').value;
    // objective
    document.getElementById('objectiveT').innerHTML = document.getElementById('objective').value;

    // Qualification
    let qualificationF = document.getElementsByClassName('qualificationF');
    let str = '';
    for (ele of qualificationF) {
        str = str + `<li> ${ele.value} </li>`;
    }
    document.getElementById('qualificationT').innerHTML = str;

    // skills
    let skillsF = document.getElementsByClassName('skillsF');
    let str1 = '';
    for (ele of skillsF) {
        str1 = str1 + `<li> ${ele.value} </li>`;
    }
    document.getElementById('skillsT').innerHTML = str1;

    // photo
    let file = document.getElementById('photoF').files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function () {
        document.getElementById('photoT').src = reader.result;
    }

    // display
    let cvt = document.getElementById('cv-t');
    cvt.style.display = 'block'
    let cvg = document.getElementById('cv-g');
    cvg.style.display = 'none'


}
printCV = () => {
    window.print();
}
