$(function() {
  function buildHTML(src,text_arry,id, url, name, show_name){
    var addName = (url.match(/\/users\/\d+/)) ? `<p><br><br>${text_arry[0]}<br><br></p>` : `<p><br>${text_arry[0]}<br><br>${text_arry[1]}</p>`;
  
    var sinIn = (name == text_arry[0].slice(0,-7))||(name == show_name) ? `<li class="buttons__button">
                                                                            <a class="buttons__button__text" data-method="get" href="/products/${id}/edit">edit</a>
                                                                            </li>
                                                                            <li class="buttons__button">
                                                                              <a class="buttons__button__text" rel="nofollow" data-method="delete" href="/products/${id}">delete</a>
                                                                            </li>` : ``;
    var html = `<img src="${src}" alt="画像">
                ${addName} 
                <ul class="buttons">
                  <li class="buttons__button">
                    <a class="buttons__button__text" data-method="get" href="/products/${id}">show</a>
                  </li>
                  ${sinIn} 
                </ul>
                <i class="far fa-times-circle" id="clear"></i>`
    return html;
  }
  $(document).on('click', '.products__sections__section__scroll-fade__ex1__image', function(e) {
    e.preventDefault();
    var text = $(this).next('p').text().split('\n');
    var text_arry = text.filter(function(x){
      return !(x === ""); 
    })
    var src = $(this).attr('src');
    var id = $(this).attr('id');
    var url = location.href
    var name = $('.header__inner__nav').children('a').text().slice(0,-15);
    var show_name = $('.products__sections__header__text').text().slice(1,-14);
    var html = buildHTML(src, text_arry, id, url, name, show_name);
    $('.details-modal, .details-modal-overlay').fadeIn();
    $('.details-modal__content').append(html);
    return false;
  });
  $(document).on('click', '#clear, .details-modal-overlay', function() {
    $('.details-modal, .details-modal-overlay').fadeOut();
    $('.details-modal__content').empty();
    return false;
  })
});