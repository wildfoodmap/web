var Sighting = DS.Model.extend({
    name: DS.attr('string')
});

export default Sighting;

Sighting.FIXTURES = [
    {
        id: 1,
        title: 'Dandelion'
    },
    {
        id: 2,
        title: 'Mushy Pea'
    }
];
