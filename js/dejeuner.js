window.onload = function (){
    var menuData = [
    {
    	titre:'Poulet orange',
    	image:'../images/menu/L/L1.jpg',
        description:'morceaux de poulet panés et frits avec une sauce contenant des écorces d orange; viande blanche sur demande',
        prix:'5000 FCFA'
    },
    {
    	titre:'Poulet général Tso',
    	image:'../images/menu/L/L2.jpg',
        description:'morceaux de poulet panés et frits avec sauce et oignons verts; viande blanche sur demande',
        prix:'5000 FCFA'
    },
    {
    	titre:'Poulet aux Noix de Cajou',
    	image:'images/menu/L/L3.jpg',
        description:'poulet coupé en dés avec châtaignes deau, poivrons verts, céleri et noix de cajou; viande blanche sur demande',
        prix:'5000 FCFA'
    },
    {
    	titre:'Poulet Kung Pao',
    	image:'../images/menu/L/L4.jpg',
        description:'boeuf sauté aux carottes et céleri, dans une sauce épicée Szechuan',
        prix:'5000 FCFA'
    },
    {
    	titre:'Haricots verts au poulet',
    	image:'../images/menu/L/L5.jpg',
        description:'poulet à la viande blanche sauté aux haricots verts et sauce soja',
        lien:'5000 FCFA'
    },
    {
    	titre:'Poulet aux Légumes',
    	image:'../images/menu/L/L6.jpg',
        description:'poulet à la viande blanche dans une sauce blanche claire sautée avec un mélange de légumes',
        lien:'5000 FCFA'
    },
    {
    	titre:'Sauce au poulet et à l ail',
    	image:'../images/menu/L/L7.jpg',
        description:'poulet sauté avec haricots verts, champignons et châtaignes à l ail',
        lien:'5000 FCFA'
    },
    {
    	titre:'Aubergines au poulet avec sauce à l ail',
    	image:'../images/menu/L8/L8.jpg',
        description:'poulet à la viande blanche, haricots verts, châtaignes d eau, champignons et aubergines, sauce à l ail',
        lien:'5000 FCFA'
    }
    ];
    for (var i = 0; i < menuData.length; i++) {
        var menu=document.createElement("div");
        menu.className="menu";
        menu.href= menuData[i].lien;
    	var img = document.createElement("img");
		img.src = menuData[i].image;
        var titre=document.createElement("h3");
        titre.innerHTML=menuData[i].titre;
        var prix = document.createElement("h5");
        prix.innerHTML=menuData[i].prix;
        var description=document.createElement("p");
        description.innerHTML=menuData[i].description;
        menu.appendChild(img);
        menu.appendChild(titre);
        menu.appendChild(prix);
        menu.appendChild(description);
		var block = document.getElementById("dejeuner").appendChild(menu);
		
        

    	}	
	
    
  
};