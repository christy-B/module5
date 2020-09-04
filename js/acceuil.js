window.onload = function (){
    var menuData = [
    {
    	titre:'déjeuner',
    	image:'images/menu/L/L.jpg',
        lien:'lien/dejeuner.html'
    },
    {
    	titre:'Soupe',
    	image:'images/menu/A/A.jpg',
        lien:'lien/soupe.html'
    },
    {
    	titre:'apéritifs',
    	image:'images/menu/B/B.jpg',
        lien:'lien/aperatif.html'
    },
    {
    	titre:'nouilles sauté',
    	image:'images/menu/PF/PF.jpg',
        lien:'lien/nouille.html'
    },
    {
    	titre:'dessert',
    	image:'images/menu/DS/DS.jpg',
        lien:'lien/dessert.html'
    },
    {
    	titre:'legumes',
    	image:'images/menu/VG/VG.jpg',
        lien:'lien/legume.html'
    },
    {
    	titre:'riz sauté',
    	image:'images/menu/FR/FR.jpg',
        lien:'lien/riz.html'
    },
    {
    	titre:'canard',
    	image:'images/menu/DK/DK.jpg',
        lien:'lien/canard.html'
    }
    ];
    for (var i = 0; i < menuData.length; i++) {
        var menu=document.createElement("a");
        menu.className="menu";
        menu.href= menuData[i].lien;
    	var img = document.createElement("img");
		img.src = menuData[i].image;
        var titre=document.createElement("h3");
        titre.innerHTML=menuData[i].titre;
        menu.appendChild(img);
        menu.appendChild(titre);
		var block = document.getElementById("content").appendChild(menu);
		
        

    	}	
	
    
  
};