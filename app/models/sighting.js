var Sighting = DS.Model.extend({
    name: DS.attr('string')
});

export default Sighting;

Sighting.FIXTURES = [
    {
        id: 1,
        address: 'Dandelion Lane, Newtown',
        type: 'Dandelion',
        description: "Lebowski ipsum vEE FUCK YOU UP, MAN! VEE TAKE YOUR MONEY! What in God's holy name are you blathering about? Donny was a good bowler, and a good man. He was… He was one of us. He was a man who loved the outdoors, and bowling, and as a surfer explored the beaches of southern California from Redondo to Calabassos. And he was an avid bowler. And a good friend. He died—he died as so many of his generation, before his time. In your wisdom you took him, Lord. As you took so many bright flowering young men, at Khe San and Lan Doc.",
        access: 'public',
        verified: true,
        visibility: 'visible',
        photo: 'http://www.conservationwatcher.com/dandelion.jpg'
    },
    {
        id: 2,
        address: 'Mushy Pea Street, Marrickville',
        type: 'Wild mushy peas',
        description: "Lebowski ipsum sex. The physical act of love. Coitus. Do you like it? My dirty undies. Laundry, Dude. The whites. Thankie… Just one thing, Dude. D'ya have to use s'many cuss words? I didn't blame anyone for the loss of my legs, some chinaman in Korea took them from me but I went out and achieved anyway. I'm as Jewish as fucking Tevye. He suspects that the culprits might be the very people who, uh, soiled your rug, and you're in a unique position to confirm or, uh, disconfirm that suspicion.",
        access: 'public',
        verified: false,
        visibility: 'visible',
        photo: 'http://www.fast-ed.com.au/ed-images/MUSHY-PEAS-EMBED.jpg'
    }
];
