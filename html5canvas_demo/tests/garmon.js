var embox2dTest_garmon = function() {
}

embox2dTest_garmon.prototype.setNiceViewCenter = function() {
    //called once when the user changes to this test from another test
    PTM = 26;
    setViewCenterWorld(new b2Vec2(0,8), true);
}

embox2dTest_garmon.prototype.setup = function() {
    //set up the Box2D scene here - the world is already created
    var shape = new b2EdgeShape();
    shape.Set(new b2Vec2(-40.0, 0.0), new b2Vec2(40.0, 0.0));
    
    var ground = world.CreateBody(new b2BodyDef());
    ground.CreateFixture(shape, 0.0);


    // left C-like static body
    left00shape = createPolygonShape([new b2Vec2(-3, 0), new b2Vec2(-1, 0), new b2Vec2(-1, 1), new b2Vec2(-3, 1)]);
    ground.CreateFixture(left00shape, 0);

    left01shape = createPolygonShape([new b2Vec2(-3, 1), new b2Vec2(-2, 1), new b2Vec2(-2, 2), new b2Vec2(-3, 2)]);
    ground.CreateFixture(left01shape, 0);

    left02shape = createPolygonShape([new b2Vec2(-3, 2), new b2Vec2(-1, 2), new b2Vec2(-1, 3), new b2Vec2(-3, 3)]);
    ground.CreateFixture(left02shape, 0);

    // right moving body
    var bd = new b2BodyDef();
    bd.set_type(b2_dynamicBody);
    bd.set_position(new b2Vec2(0, 0));
    var body = world.CreateBody(bd);

    var right00shape = createPolygonShape([new b2Vec2(3, 1), new b2Vec2(5, 1), new b2Vec2(5, 3), new b2Vec2(3, 3)]);
    var right00fixDef = new b2FixtureDef();
    right00fixDef.set_shape(right00shape);
    right00fixDef.set_density(1.0);
    right00fixDef.set_friction(0.1);

    body.CreateFixture(right00fixDef);

    var right01shape = createPolygonShape([new b2Vec2(3, 0), new b2Vec2(5, 0), new b2Vec2(5, 1), new b2Vec2(3, 1)]);
    var right01fixDef = new b2FixtureDef();
    right01fixDef.set_shape(right01shape);
    right01fixDef.set_density(10.0);
    right01fixDef.set_friction(0.1);

    body.CreateFixture(right01fixDef);

    var right02shape = createPolygonShape([new b2Vec2(2, 1.03), new b2Vec2(3, 1.03), new b2Vec2(3, 1.97), new b2Vec2(2, 1.97)]);
    var right02fixDef = new b2FixtureDef();
    right02fixDef.set_shape(right02shape);
    right02fixDef.set_density(1.0);
    right02fixDef.set_friction(0.1);

    body.CreateFixture(right02fixDef);
    body.ResetMassData();
}

embox2dTest_garmon.prototype.step = function() {
    //this function will be called at the beginning of every time step
}

