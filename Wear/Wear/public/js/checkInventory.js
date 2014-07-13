var MobileServiceClient = WindowsAzure.MobileServiceClient,
    client = new MobileServiceClient('https://wearmobile.azure-mobile.net/', 'NoUuDwXojBaYWvjcsvsOYNhBIOGBok93'),
    inventoryTable = client.getTable('inventory');

function refreshInventoryItems() {
    
    var query = inventoryTable.take(10).read().done(function (results) {
        console.log(results[0]);
        var realResults = results.filter(function (value, index, ar) {
        if (value.rainfriendly == (true)&&(value.mintemp <= 50) ){ 
            return true;
        }
            return false;
        });
    }, function (err) {
        alert("Error: " + err);
    });
    
    /*var query = inventoryTable.where({ rainfriendly: (pop>=40) }{average>mintemp} {average<maxtemp});
     query.read().then(function (inventoryTableItems) {
        var listItems = $.map(inventoryTableItems, function (item) {
            return $('<li>')
                    .attr('data-inventoryitem-id', item.id)
                    .append($('<div>').append($('<input class="item-text">').val(item.clothingname)));
        });
        $('#inventory-items').empty().append(listItems).toggle(listItems.length > 0);
    }, handleError);
    function handleError(error) {
        var text = error + (error.request ? ' - ' + error.request.status : '');
        $('#errorlog').append($('<li>').text(text));
    }*/
}