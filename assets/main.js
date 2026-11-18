// =================================================================
// JAVASCRIPT المشترك لكل صفحات الموقع
// =================================================================

// السنة الحالية بكل مكان فيه class="year"
document.querySelectorAll('.year').forEach(el => el.textContent = new Date().getFullYear());

// -------------------- الأسئلة الشائعة (يعمل بأي صفحة فيها .faq-item) --------------------
document.querySelectorAll('.faq-item').forEach(item=>{
  const q = item.querySelector('.faq-q');
  if(!q) return;
  q.addEventListener('click', ()=>{
    const isOpen = item.classList.contains('open');
    item.parentElement.querySelectorAll('.faq-item').forEach(i=>i.classList.remove('open'));
    if(!isOpen) item.classList.add('open');
  });
});

// -------------------- قائمة الجوال --------------------
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const mobileOverlay = document.getElementById('mobileOverlay');
function closeMenu(){ mobileMenu && mobileMenu.classList.remove('open'); mobileOverlay && mobileOverlay.classList.remove('open'); }
menuToggle?.addEventListener('click', ()=>{ mobileMenu.classList.add('open'); mobileOverlay.classList.add('open'); });
mobileOverlay?.addEventListener('click', closeMenu);
mobileMenu?.querySelectorAll('a').forEach(a=>a.addEventListener('click', closeMenu));

// -------------------- صور الخدمات: عرض عنصر بديل عند عدم وجود صورة مرفوعة --------------------
// إذا لم تُرفع الصورة بعد بالاسم المطلوب في assets/images/، يظهر بديل واضح بدل خطأ صورة مكسورة.
document.querySelectorAll('img[data-fallback]').forEach(img=>{
  img.addEventListener('error', function(){
    this.style.display = 'none';
    const label = this.nextElementSibling;
    if(label && label.classList.contains('ph-label')) label.style.display = 'flex';
  });
});
