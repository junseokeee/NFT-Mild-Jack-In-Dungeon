const move_to_address = (address) => {
    window.location.href = address;
}

document.getElementById('main_title').addEventListener('click', function() {move_to_address('./main.php')});

document.getElementById('story_div').addEventListener('click', function() {move_to_address('./story.php')});

document.getElementById('buy_div').addEventListener('click', function() {move_to_address('./buy.php')});

document.getElementById('com_div').addEventListener('click', function() {move_to_address('./com.php')});

document.getElementById('faq_div').addEventListener('click', function() {move_to_address('./faq.php')});