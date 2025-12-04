let selectedProvider = null;

document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById(tab.dataset.tab).classList.add('active');
    updatePayButton();
  });
});

document.querySelectorAll('.logo').forEach(logo => {
  logo.addEventListener('click', () => {
    document.querySelectorAll('.logo').forEach(l => l.classList.remove('selected'));
    logo.classList.add('selected');
    selectedProvider = true;
    updatePayButton();
  });
});

document.getElementById('cardNumber')?.addEventListener('input', e => {
  let v = e.target.value.replace(/\D/g, '').substring(0,16);
  e.target.value = v.match(/.{1,4}/g)?.join(' ') || v;
  updatePayButton();
});
document.getElementById('expiry')?.addEventListener('input', e => {
  let v = e.target.value.replace(/\D/g, '').substring(0,4);
  if(v.length >= 2) e.target.value = v.substring(0,2) + '/' + v.substring(2);
  updatePayButton();
});
document.getElementById('cvv')?.addEventListener('input', () => updatePayButton());
document.getElementById('cardName')?.addEventListener('input', () => updatePayButton());

function cardIsValid() {
  const num = document.getElementById('cardNumber')?.value.replace(/\s/g,'').length >= 13;
  const exp = /^\d{2}\/\d{2}$/.test(document.getElementById('expiry')?.value || '');
  const cvv = /^\d{3,4}$/.test(document.getElementById('cvv')?.value || '');
  const name = document.getElementById('cardName')?.value.trim().length >= 3;
  return num && exp && cvv && name;
}

function updatePayButton() {
  const isCard = document.querySelector('.tab[data-tab="cards"]')?.classList.contains('active');
  const valid = isCard ? cardIsValid() : selectedProvider !== null;

  const btn = document.getElementById('payBtn');
  if (valid) {
    btn.classList.remove('disabled');
    btn.classList.add('enabled');
    btn.disabled = false;
  } else {
    btn.classList.remove('enabled');
    btn.classList.add('disabled');
    btn.disabled = true;
  }
}

document.getElementById('payBtn')?.addEventListener('click', () => {
  if (!document.getElementById('payBtn').classList.contains('enabled')) {
    alert('Please fill all fields correctly');
    return;
  }
  alert('Thank you! ৳10,000 donated successfully!');
});

document.addEventListener('DOMContentLoaded', updatePayButton);