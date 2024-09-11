

//根节点class类名
var rootdiv = "top_warp";

//要删除的根节点的class类名
var del_Classes = ["lasted-num", "fn-left", "lasted-time", "fn-right"];
//var del_Classes = ["lasted-num"];

var index = 0;
function removeDiv(del_class) {
	//var parentDiv = document.getElementById("parentDiv");
	//var div2 = document.getElementById("div2");

	var parentDiv = document.getElementsByClassName(rootdiv);
	var delDivs = document.getElementsByClassName(del_class);
	//parentDiv.removeChild(delDiv);
	// for (index = 0; index < delDivs.length; index++) {
	// 	//console.log(delDivs.item(index));
	// 	//parentDiv.removeChild(delDivs.item(index));
	// 	var node = delDivs.item(index);
	// 	if (node.parentNode) {
	// 		console.log("removeChild--", node);
	// 		node.parentNode.removeChild(node);
	// 	} else {
	// 		console.log("removeChild parentNode Null ", node);
	// 	}
	// }
	Array.from(delDivs).forEach(node => {
		if (node.parentNode) {
			//  console.log("removeChild--", node);
			node.parentNode.removeChild(node);
		}
	});

}

function removeAllDivs() {
	// for (index = 0; index < del_Classes.length; index++) {
	// 	console.log("removeing-", del_Classes[index]);
	// 	removeDiv(del_Classes[index]);

	// }

	del_Classes.forEach(e => {
		console.log("removeing-", e);
		removeDiv(e);
	});
}


removeAllDivs();

