const $ = s => document.querySelector(s);
const fill = (id, arr, fn) => { $(id).innerHTML = arr.map(fn).join(''); };

fill('#whyGrid', [
  ['👩‍🏫','Experienced faculty','Over 80 teachers with an average of 12 years in the classroom.'],
  ['📈','Strong academic results','98% pass rate in board exams, with 40% scoring above 90%.'],
  ['🏫','Modern infrastructure','Bright, ventilated classrooms and well-equipped labs.'],
  ['🌱','Holistic development','Art, music, debate and community service alongside academics.'],
  ['⚽','Sports for everyone','Twelve sports with trained coaches and inter-school fixtures.'],
  ['🛡️','Safe campus','CCTV, verified staff, GPS-tracked buses and a full-time nurse.']
], ([i,t,p]) => `<article class="card"><span class="ico" aria-hidden="true">${i}</span><h3>${t}</h3><p>${p}</p></article>`);

fill('#progGrid', [
  ['Primary','Grades 1–5 · Ages 6–10','Learning through play, stories and hands-on activity.',['Reading and numeracy foundation','Activity-based EVS','Art, music and games daily']],
  ['Middle','Grades 6–8 · Ages 11–13','Building concepts, curiosity and study habits.',['Integrated science and maths labs','Coding and robotics club','Languages: English, Hindi, French']],
  ['Secondary','Grades 9–10 · Ages 14–15','Board exam preparation with personal mentoring.',['Weekly assessments and feedback','Career guidance sessions','Olympiad coaching']],
  ['Senior Secondary','Grades 11–12 · Ages 16–17','Focused streams that lead to college and careers.',['Science, Commerce and Humanities','Entrance exam support','Internships and counselling']]
], ([t,a,d,f]) => `<article class="card prog"><h3>${t}</h3><p class="age">${a}</p><p>${d}</p><ul>${f.map(x=>`<li>${x}</li>`).join('')}</ul></article>`);

fill('#statGrid', [['25+','Years of excellence'],['6,500','Alumni worldwide'],['85','Faculty members'],['12','Sports and clubs']],
  ([n,l]) => `<div><b>${n}</b><span>${l}</span></div>`);

fill('#facGrid', [
  ['🖥️','Smart classrooms','Interactive boards in every room.','#cfe8e2','#9fd2c7'],
  ['🔬','Science and computer labs','Separate labs for each science.','#fbe6b8','#f4c565'],
  ['📚','Library','20,000 books and a quiet reading hall.','#d9e3f6','#a9bfe8'],
  ['🏟️','Sports grounds','Football, cricket, courts and a pool.','#d5ecd0','#a6d79b'],
  ['🚌','Safe transport','GPS-tracked buses with attendants.','#f7d9d1','#eaa797'],
  ['🩺','Medical room','Nurse on duty and a visiting doctor.','#e5dcf3','#c4b0e3'],
  ['🍽️','Cafeteria','Hygienic, nutritionist-approved meals.','#fde5c8','#f6c58b'],
  ['🎨','Art and music studios','Dedicated spaces to create and perform.','#d3ecee','#9ccfd5']
], ([i,t,d,a,b]) => `<article class="card fac"><div class="pic" style="--c1:${a};--c2:${b}" aria-hidden="true">${i}</div><div><h3>${t}</h3><p>${d}</p></div></article>`);

fill('#stepList', [['Enquiry','Share your details online'],['Application','Fill the form and upload documents'],['Assessment','Friendly interaction and a short test'],['Selection','Result shared by email and phone'],['Enrollment','Pay fees and confirm the seat']],
  ([t,s]) => `<li><b>${t}</b><span>${s}</span></li>`);

fill('#dateGrid', [['Applications open','1 Nov 2026'],['Application deadline','31 Dec 2026'],['Assessment day','18 Jan 2027'],['Results announced','5 Feb 2027'],['Enrollment deadline','28 Feb 2027']],
  ([e,d]) => `<div class="card date"><b>${d}</b><span>${e}</span></div>`);

const docs = ['Birth certificate','Previous school records','Passport-size photographs (4)','Address proof','Parent or guardian ID proof'];
fill('#docList', docs, (d,i) => `<li><label><input type="checkbox" data-doc><span>${d}</span></label></li>`);
const updateDocs = () => { const n = document.querySelectorAll('[data-doc]:checked').length;
  $('#docCount').textContent = n === docs.length ? 'All documents ready. You can apply now.' : `${n} of ${docs.length} documents ready.`; };
document.querySelectorAll('[data-doc]').forEach(c => c.addEventListener('change', updateDocs)); updateDocs();

fill('#quoteGrid', [
  ['The teachers know my son by name and by how he learns. His confidence has grown a lot.','Neha Verma','Parent of Grade 4 student'],
  ['Bus tracking and regular updates give us real peace of mind as working parents.','Rahul Mehta','Parent of Grade 7 student'],
  ['The career counselling in Grade 10 helped our daughter choose her stream clearly.','Sunita Rao','Parent of Grade 11 student'],
  ['Admission was simple. The team answered every question before we even asked.','Arjun Sharma','Parent of Grade 2 student']
], ([q,n,r]) => `<figure class="card quote" style="margin:0"><p>“${q}”</p><cite><b>${n}</b><br>${r}</cite></figure>`);

fill('#faqList', [
  ['How do I apply?','Click Apply now, send the enquiry, and our team will share the application form within one working day.'],
  ['Which documents are required?','Birth certificate, previous school records, four passport-size photographs, address proof and parent or guardian ID proof.'],
  ['Is there an entrance test?','Grades 1–2 have a friendly interaction. Grades 3–12 have a short written assessment and a conversation with the principal.'],
  ['Which classes are accepting applications?','Grades 1 to 12 for 2027–28. Seats in Grades 9 and 11 are limited.'],
  ['How can I schedule a campus visit?','Choose Schedule a visit, share your preferred time, and we will confirm. Visits run Monday to Saturday, 10 am to 3 pm.'],
  ['Are scholarships or sibling concessions available?','Yes. Siblings get 10% off the annual fee, and merit scholarships are available from Grade 6.']
], ([q,a]) => `<details><summary>${q}</summary><p>${a}</p></details>`);

// Mobile menu
const burger = $('.burger'), menu = $('#menu');
burger.addEventListener('click', () => burger.setAttribute('aria-expanded', menu.classList.toggle('open')));
menu.addEventListener('click', e => { if (e.target.closest('a,button')) { menu.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); } });

// Modal and toast
const modal = $('#modal'), form = $('#enqForm'), err = $('#err');
const copy = {
  apply: ['Apply for 2027–28', 'Share your details and we will send the application form.'],
  visit: ['Schedule a campus visit', 'Tell us who you are and we will confirm a time.'],
  talk: ['Talk to our admissions team', 'We will call you back within one working day.']
};
let kind = 'apply';
const toast = msg => { const t = $('#toast'); t.textContent = msg; t.classList.add('on'); clearTimeout(toast.id); toast.id = setTimeout(() => t.classList.remove('on'), 4500); };
document.addEventListener('click', e => {
  const o = e.target.closest('[data-open]');
  if (o) { kind = o.dataset.open; $('#mTitle').textContent = copy[kind][0]; $('#mText').textContent = copy[kind][1]; err.textContent = ''; modal.showModal(); form.querySelector('input').focus(); }
  if (e.target.closest('[data-close]') || e.target === modal) modal.close();
});
form.addEventListener('submit', e => {
  e.preventDefault();
  const bad = [...form.elements].filter(f => f.name && !f.checkValidity());
  [...form.elements].forEach(f => f.name && f.setAttribute('aria-invalid', !f.checkValidity()));
  if (bad.length) { err.textContent = 'Please correct: ' + bad.map(f => f.name).join(', ') + '.'; bad[0].focus(); return; }
  modal.close(); form.reset();
  toast(kind === 'visit' ? 'Visit request received. We will confirm your slot by phone.' : 'Thank you. Our admissions team will contact you within one working day.');
});
