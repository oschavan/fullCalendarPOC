define(['knockout'], function (ko) {
    var buildings = ko.observableArray([
        {
            id: 'B1',
            name: '460 Bryant'
        },
        {
            id: 'B2',
            name: '555 Amanora'
        },
        {
            id: 'B3',
            name: '564 Pacific'
        }]);
   

    var newevents = [
        { id: 1, resourceId: 'b', start: '2018-04-07T02:00:00', end: '2018-04-07T07:00:00', title: 'event 1', buildingid: 'B1' },
        { id: 2, resourceId: 'c', start: '2018-04-07T05:00:00', end: '2018-04-07T22:00:00', title: 'event 2', buildingid: 'B1' },
        { id: 3, resourceId: 'd1', start: '2018-04-06', end: '2018-04-08', title: 'event 3', buildingid: 'B2' },
        { id: 4, resourceId: 'e', start: '2018-04-07T03:00:00', end: '2018-04-07T08:00:00', title: 'event 4', buildingid: 'B3' },
        { id: 5, resourceId: 'f', start: '2018-04-07T00:30:00', end: '2018-04-07T02:30:00', title: 'event 5', buildingid: 'B3' }
       
    ];

    var buildingResource = ko.observableArray([{ id: 'a',buildingid:'B1', building: '460 Bryant', title: 'Apartment A' },
    { id: 'b', buildingid:'B1', building: '460 Bryant', title: 'Apartment B', eventColor: 'green' },
    { id: 'c', buildingid:'B1', building: '460 Bryant', title: 'Apartment C', eventColor: 'orange' },
    {
        id: 'd', buildingid:'B2',building: '555 Amanora', title: 'Apartment D', children: [
            { id: 'd1', title: 'Bed D1' },
            { id: 'd2', title: 'Bed D2' }
        ]
    },
    { id: 'e', buildingid:'B3', building: '564 Pacific', title: 'Apartment E' },
    { id: 'f', buildingid:'B3', building: '564 Pacific', title: 'Apartment F', eventColor: 'red' }]);
    
    var selectedBuildingResource = ko.observableArray([]);

    var appointmentObj = {
        apartmentName: ko.observable(''),
        pName: ko.observable(''),
        startDate: ko.observable(''),
        endDate:ko.observable(''),
        repeat:ko.observable(false),
        occurences:ko.observable(1)
    };

    return {
        buildings: buildings,      
        newevents: newevents,
        buildingResource: buildingResource,
        selectedBuildingResource:selectedBuildingResource,
        appointmentObj:appointmentObj
    }
});