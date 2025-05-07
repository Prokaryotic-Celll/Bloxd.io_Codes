fetch('codes.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('code-sections');

    Object.entries(data).forEach(([categoryName, subcategories]) => {
      const categoryDiv = document.createElement('div');
      categoryDiv.className = 'category';
      categoryDiv.innerHTML = `<h2>${categoryName}</h2>`;

      subcategories.forEach(subcat => {
        const subDiv = document.createElement('div');
        subDiv.className = 'subcategory';
        subDiv.innerHTML = `<h3>${subcat.name}</h3>`;

        subcat.codes.forEach(({ code, desc }) => {
          const codeBox = document.createElement('div');
          codeBox.className = 'code-block';
          codeBox.innerHTML = `
            <div class="code-desc">${desc}</div>
            <pre><code>${code}</code></pre>
            <button class="copy-btn">Copy</button>
          `;
          const button = codeBox.querySelector('.copy-btn');
          button.addEventListener('click', () => {
            navigator.clipboard.writeText(code);
            button.innerText = "Copied!";
            setTimeout(() => button.innerText = "Copy", 2000);
          });

          subDiv.appendChild(codeBox);
        });

        categoryDiv.appendChild(subDiv);
      });

      container.appendChild(categoryDiv);
    });
  });
