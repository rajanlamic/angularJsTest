function testInstance(par) {
    if (par instanceof testInstance) {
        return par;
    }
    if (!(this instanceof testInstance)) {
        return new testInstance(par);
    }
    this.par = par;
}
testInstance('pp');