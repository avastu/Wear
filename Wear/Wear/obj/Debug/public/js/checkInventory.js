var MobileServiceClient = WindowsAzure.MobileServiceClient,
    client = new MobileServiceClient('https://wearmobile.azure-mobile.net/', 'NoUuDwXojBaYWvjcsvsOYNhBIOGBok93'),
    inventoryTable = client.getTable('inventory');

function refreshTodoItems() {
    var query = inventoryTable.where({ rainfriendly: 0 });
    query.read().then(function (inventoryTableItems) {
        var listItems = $.map(inventoryTableItems, function (item) {
            return $('<li>')
                    .attr('data-todoitem-id', item.id)
                    .append($('<div>').append($('<input class="item-text">').val(item.text)));
        });
        
        $('#todo-items').empty().append(listItems).toggle(listItems.length > 0);
    }, handleError);
}

function handleError(error) {
    var text = error + (error.request ? ' - ' + error.request.status : '');
    $('#errorlog').append($('<li>').text(text));
}