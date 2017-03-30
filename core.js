var feed = new Instafeed({
    get: 'user',
    userId: '3094428566',
    clientId: 'b9402187c64f439d8be514ad1761ceed',
    accessToken: '3094428566.1677ed0.6e3ec460b6fc4cf8bff505176f745085',
    template:  '<div class="img" style="background: url({{image}}) no-repeat no-repeat center center scroll; background-size: cover;"></div>',
    limit: 1,
    resolution: "standard_resolution"
});
feed.run();