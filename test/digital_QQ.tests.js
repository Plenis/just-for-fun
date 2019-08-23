describe('DigitalQQ', function () {

    it('should display question added on screen', function () {
        let input = DigitalQQ();
        input.addBtn("I need help with diplaying my work.")
    assert.deepEqual(input.getQuestions(),'{ [], (I need help with diplaying my work.) }')
    })
});