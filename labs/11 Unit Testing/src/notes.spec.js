

describe("notes", function () {
    const default_count = 5;
    let default_notes = [];

    beforeEach(() => {
        notes.clear();


        for(let i = 0; i < default_count; i++) {
            notes.add(`note ${i}`);
        }

        default_notes = notes.list()
    });

    describe('adding notes', function ()  {

        it('should be able to add a new note', function () {
            expect(notes.add('sixth note')).toBe(true);
            expect(notes.count()).toBe(6);
        });

        it('should ignore blank notes', function() {
            expect(notes.add('')).toBe(false);
            expect(notes.count()).toBe(default_count);
        });


        it('should ignore notes containing only whitespace', function () {
            expect(notes.add(' ')).toBe(false)
            expect(notes.count()).toBe(default_count);
        });

        it('should require a string parameter', function () {
            expect(notes.add()).toBe(false);
            expect(notes.count()).toBe(default_count);
        });
    });

    describe('removing notes', function() {
        it('should remove the first note', function () {
            expect(notes.remove(0)).toBe(true);
            expect(notes.count()).toBe(4);
        });

        it('should not remove a non-existent note', function () {
            expect(notes.remove(10)).toBe(false);
            expect(notes.count()).toBe(default_count);
        });

        it('should not remove on empty parameter passes', function () {
            expect(notes.remove()).toBe(false);
            expect(notes.count()).toBe(default_count);
        });

    });

    describe('getting notes', function() {
        it('should correctly find all notes containing a string', function () {
            expect(notes.find('note')).toEqual(default_notes);
            expect(notes.find('Note')).toEqual(default_notes);
        });

        it('should return an empty array on a query with no results', function () {
            expect(notes.find('th')).toEqual([]);
        });

        it('should return an empty array on bad queries', function() {
            expect(notes.find(undefined)).toEqual([]);
        });
    });
});
