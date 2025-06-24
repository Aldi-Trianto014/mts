const dropdowns = [
    { btn: 'dropdownProfilButton', content: 'dropdownProfil' },
    { btn: 'dropdownPendidikanButton', content: 'dropdownPendidikan' },
    { btn: 'dropdownKegiatanButton', content: 'dropdownKegiatan' },
    { btn: 'dropdownInformasiButton', content: 'dropdownInformasi' }
  ];

  dropdowns.forEach(({ btn, content }) => {
    const button = document.getElementById(btn);
    const menu = document.getElementById(content);

    button?.addEventListener('click', () => {
      const isOpen = !menu.classList.contains('hidden');
      document.querySelectorAll('.dropdown-content').forEach(el => el.classList.add('hidden'));
      if (!isOpen) menu.classList.remove('hidden');
    });
  });

  document.addEventListener('click', (e) => {
    dropdowns.forEach(({ btn, content }) => {
      const button = document.getElementById(btn);
      const menu = document.getElementById(content);
      if (!button.contains(e.target) && !menu.contains(e.target)) {
        menu.classList.add('hidden');
      }
    });
  });