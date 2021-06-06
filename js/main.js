(function (){
    const filterBtn = document.querySelectorAll(".filter-btn");

    filterBtn.forEach(function(btn){
        btn.addEventListener("click", function(e){
            e.preventDefault();
            const value = e.target.dataset.filter;

            const items = document.querySelectorAll(".gallery-item");
            items.forEach(function(item){
                if (value === "all"){
                    item.style.display ="block";
                }
                else{
                    if(item.classList.contains(value)){
                        item.style.display ="block";
                    }
                    else {
                        item.style.display = "none";
                    }
                }
            });
        });
    });

})();