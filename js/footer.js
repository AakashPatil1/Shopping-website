const createFooter = () =>{
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
        <img src="img/light-logo.png" class="logo" alt="">
        <div class="footer-ul-container">
            <ul class="category">
                <li class="category-title">men</li>
                <li><a href="#" class="footer-link">t-shirt</a></li>
                <li><a href="#" class="footer-link">sweatshirt</a></li>
                <li><a href="#" class="footer-link">shirt</a></li>
                <li><a href="#" class="footer-link">jeans</a></li>
                <li><a href="#" class="footer-link">trousers</a></li>
                <li><a href="#" class="footer-link">shoes</a></li>
                <li><a href="#" class="footer-link">casuals</a></li>
                <li><a href="#" class="footer-link">foemals</a></li>
                <li><a href="#" class="footer-link">sports</a></li>
                <li><a href="#" class="footer-link">whach</a></li>
            </ul>
            <ul class="category">
                <li class="category-title">women</li>
                <li><a href="#" class="footer-link">t-shirt</a></li>
                <li><a href="#" class="footer-link">sweatshirt</a></li>
                <li><a href="#" class="footer-link">shirt</a></li>
                <li><a href="#" class="footer-link">jeans</a></li>
                <li><a href="#" class="footer-link">trousers</a></li>
                <li><a href="#" class="footer-link">shoes</a></li>
                <li><a href="#" class="footer-link">casuals</a></li>
                <li><a href="#" class="footer-link">foemals</a></li>
                <li><a href="#" class="footer-link">sports</a></li>
                <li><a href="#" class="footer-link">whach</a></li>
            </ul>
        </div>
       
    </div>
    <p class="footer-title">about company</p>
    <p class="info">Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. 
        Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut.Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. 
        Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut.Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit.
        Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut.Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. 
        Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut.</p>
    <p class="info">support emails - help@gmail.com, customersupport@gamil.com</p>  
    <p class="info">telephone - 91 000000000, 000000000</p>  
    <div class="footer-social-container">
        <div>
            <a href="#" class="social-link">terms & service</a>
            <a href="#" class="social-link">privacy page</a>
        </div>
        <div>
            <a href="#" class="social-link">instagram</a>
            <a href="#" class="social-link">facebook</a>
            <a href="#" class="social-link">twitter</a>
        </div>
    </div>
    <p class="footer-credit">Clothing, Best apparels online store</p>
    `;
}

createFooter();