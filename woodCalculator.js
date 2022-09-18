function woodCalculator(chairr,tablee,bedd){
    var cub = (chair*1)+(table*3)+(bed*5);
    return cub;
}
var chair=2;
var table=2;
var bed=3;
var totalWood =woodCalculator(chair,table,bed);
console.log("chair", "   " ," table", "   ","bed", "   " ,"Total Wood (cubic)");
console.log("  ", chair ,"      ", table ,"       ", bed ,"         ",totalWood,"cubic");