(()=>{
const S='fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"';
const I={
dl:['0 0 24 24',`<g ${S}><path d="M3,12.3v7a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2v-7"/><polyline points="7.9 12.3 12 16.3 16.1 12.3"/><line x1="12" x2="12" y1="2.7" y2="14.2"/></g>`],
about:['0 0 24 24','<path d="M12 3C7.04 3 3 7.04 3 12C3 16.96 7.04 21 12 21C16.96 21 21 16.96 21 12C21 7.04 16.96 3 12 3ZM12 19.5C7.86 19.5 4.5 16.14 4.5 12C4.5 7.86 7.86 4.5 12 4.5C16.14 4.5 19.5 7.86 19.5 12C19.5 16.14 16.14 19.5 12 19.5ZM14.3 7.7C14.91 8.31 15.25 9.13 15.25 10C15.25 10.87 14.91 11.68 14.3 12.3C13.87 12.73 13.33 13.03 12.75 13.16V13.5C12.75 13.91 12.41 14.25 12 14.25C11.59 14.25 11.25 13.91 11.25 13.5V12.5C11.25 12.09 11.59 11.75 12 11.75C12.47 11.75 12.91 11.57 13.24 11.24C13.57 10.91 13.75 10.47 13.75 10C13.75 9.53 13.57 9.09 13.24 8.76C12.58 8.1 11.43 8.1 10.77 8.76C10.44 9.09 10.26 9.53 10.26 10C10.26 10.41 9.92 10.75 9.51 10.75C9.1 10.75 8.76 10.41 8.76 10C8.76 9.13 9.1 8.32 9.71 7.7C10.94 6.47 13.08 6.47 14.31 7.7H14.3ZM13 16.25C13 16.8 12.55 17.25 12 17.25C11.45 17.25 11 16.8 11 16.25C11 15.7 11.45 15.25 12 15.25C12.55 15.25 13 15.7 13 16.25Z"/>'],
dc:['0 0 24 24','<path d="M18.59 5.88997C17.36 5.31997 16.05 4.89997 14.67 4.65997C14.5 4.95997 14.3 5.36997 14.17 5.69997C12.71 5.47997 11.26 5.47997 9.83001 5.69997C9.69001 5.36997 9.49001 4.95997 9.32001 4.65997C7.94001 4.89997 6.63001 5.31997 5.40001 5.88997C2.92001 9.62997 2.25001 13.28 2.58001 16.87C4.23001 18.1 5.82001 18.84 7.39001 19.33C7.78001 18.8 8.12001 18.23 8.42001 17.64C7.85001 17.43 7.31001 17.16 6.80001 16.85C6.94001 16.75 7.07001 16.64 7.20001 16.54C10.33 18 13.72 18 16.81 16.54C16.94 16.65 17.07 16.75 17.21 16.85C16.7 17.16 16.15 17.42 15.59 17.64C15.89 18.23 16.23 18.8 16.62 19.33C18.19 18.84 19.79 18.1 21.43 16.87C21.82 12.7 20.76 9.08997 18.61 5.88997H18.59ZM8.84001 14.67C7.90001 14.67 7.13001 13.8 7.13001 12.73C7.13001 11.66 7.88001 10.79 8.84001 10.79C9.80001 10.79 10.56 11.66 10.55 12.73C10.55 13.79 9.80001 14.67 8.84001 14.67ZM15.15 14.67C14.21 14.67 13.44 13.8 13.44 12.73C13.44 11.66 14.19 10.79 15.15 10.79C16.11 10.79 16.87 11.66 16.86 12.73C16.86 13.79 16.11 14.67 15.15 14.67Z"/>'],
home:['0 0 16 16','<path d="M1 6V15H6V11C6 9.89543 6.89543 9 8 9C9.10457 9 10 9.89543 10 11V15H15V6L8 0L1 6Z"/>'],
warn:['0 0 24 24',`<g ${S}><circle cx="12" cy="17" r="1" fill="currentColor" stroke="none"/><path d="M12 10L12 14"/><path d="M3.44722 18.1056L10.2111 4.57771C10.9482 3.10361 13.0518 3.10362 13.7889 4.57771L20.5528 18.1056C21.2177 19.4354 20.2507 21 18.7639 21H5.23607C3.7493 21 2.78231 19.4354 3.44722 18.1056Z"/></g>`],
mf:['0 0 32 32','<path d="M14.839 9.563c-0.661 0.557 3.927-0.609 3.468 1.651-0.443 2.177-4.828-0.459-9.629-0.235-2.125 0.1-4.073 0.709-5.313 2.224 1.297-1.479 3.865-1.124 3.199-0.109-1.568 2.371-4.505 0.661-6.563 5.303 0.245-0.536 0.912-1.593 3.792-2.036 2.115-0.324 5.62-0.021 6.739 1.728 1.229 1.928-5.015 1.709-1.557 2.1 4.792 0.541 8.396 4.411 13.084 4.411 6.068 0 9.896-3.093 9.943-8.192 0.083-9.229-12.136-11.089-17.161-6.844zM23.864 19.636c-1.593-0.048-3.208-0.683-4.484-1.308-3.156-1.541-4.453-2.073-4.453-2.145 0-0.089 1.896 0.645 5.084-1.052 1.844-0.98 1.911-1.833 3.853-2.005 2.308-0.204 3.948 1.505 3.948 3.301 0 1.803-1.624 3.271-3.948 3.209z"/>'],
acc:['0 0 24 24',`<path ${S} d="M20 18L14 18M17 15V21M4 21C4 17.134 7.13401 14 11 14C11.695 14 12.3663 14.1013 13 14.2899M15 7C15 9.20914 13.2091 11 11 11C8.79086 11 7 9.20914 7 7C7 4.79086 8.79086 3 11 3C13.2091 3 15 4.79086 15 7Z"/>`],
wine:['0 0 16 16','<path fill-rule="evenodd" clip-rule="evenodd" d="M13 7C13 9.41896 11.2822 11.4367 9 11.9V14H12V16H4V14H7V11.9C4.71776 11.4367 3 9.41896 3 7V6.89072C3 6.63062 3.01986 6.3709 3.05941 6.11382L4 0H12L12.9406 6.11382C12.9801 6.3709 13 6.63062 13 6.89072V7ZM5.2543 5H10.7457L10.2842 2H5.71584L5.2543 5Z"/>']
};
const ic=k=>`<svg viewBox="${I[k][0]}" fill="currentColor" aria-hidden="true">${I[k][1]}</svg>`;
const p=document.body.dataset.page;
const links=[
 p==='download'||p==='policy'?['/home','Home','home']:['/download','Download','dl'],
 p==='about'?['/home','Home','home']:['/about','About','about'],
 ['/discord','Discord','dc']];
const nav=links.map(([h,t,k])=>`<a class="btn" href="${h}" aria-label="${t}">${ic(k)}<span class="t">${t}</span></a>`).join('');
document.body.insertAdjacentHTML('afterbegin',
`<div class="topbar" id="top"><a class="brand" href="/home">KynorPS</a><nav>${nav}</nav></div>
<header class="hero"><h1>KynorPS</h1><p class="sub">A GDPS maintained by Kynorie.</p><nav class="nav" id="nav">${nav}</nav>
<a class="credit" href="https://fhgdps.com/">Thanks GDPSFH for letting us host this GDPS for free!</a></header>`);
document.body.insertAdjacentHTML('beforeend','<footer><p>Not affiliated or endorsed by RobTopGames/RobTop.</p><a href="/policy">Privacy Policy</a></footer>');
document.querySelectorAll('[data-i]').forEach(e=>e.outerHTML=ic(e.dataset.i));
const top=document.getElementById('top');
new IntersectionObserver(([e])=>top.classList.toggle('show',!e.isIntersecting&&e.boundingClientRect.top<0)).observe(document.getElementById('nav'));
document.querySelectorAll('.acc>button').forEach(b=>b.addEventListener('click',()=>{
 const a=b.parentElement;b.setAttribute('aria-expanded',a.classList.toggle('open'));}));
const w=document.getElementById('wine'),m=document.getElementById('modal');
if(w&&m){
 const linux=/Linux/i.test(navigator.userAgent)&&!/Android/i.test(navigator.userAgent);
 w.addEventListener('click',e=>{if(!linux){e.preventDefault();m.classList.add('show');}});
 document.getElementById('ok').addEventListener('click',()=>m.classList.remove('show'));
}
})();
