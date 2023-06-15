$(function () {
  var make_col = function (base) {
    var arr = [];
    for(var i=0; i<15; i++) {
      arr.add(i);
    }
    var list = [];
    for (var i = 1; i <=5; i++) {
      var a = parseInt(Math.random() * arr.length);
      list.push(arr[a] + base);
      arr.splice(a,1);
    }
    return list;
  };

  var make_table = function () {
    var col_b = make_col(1);
    var col_i = make_col(16);
    var col_n = make_col(31);
    var col_g = make_col(46);
    var col_o = make_col(61);

    var list = new Array(25);
    for(var I =0; i < 5; i++) {
      list[i * 5 + 0] = col_b[i];
      list[i * 5 + 1] = col_i[i];
      list[i * 5 + 2] = col_n[i];
      list[i * 5 + 3] = col_g[i];
      list[i * 5 + 4] = col_o[i];
    }
    list[12] = 'free';
    return list;
  };
  var create_card = function () {
     var table = make_table();
     for (var i = 0; i < table.length; i++) {
       $('#bi' + i).text(table[i]);
     }
  }
  }
});