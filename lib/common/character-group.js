"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterGroup = exports.CharacterTag = exports.Gender = exports.Race = exports.Speciality = exports.Element = void 0;
class Element {
    constructor() {
        this.method568 = this.parse;
        this.method401 = this.parseFull;
    }
    parse(id, container) {
        switch (id) {
            case 'Red':
                return container.getUiString('element_kind_red');
            case 'Blue':
                return container.getUiString('element_kind_blue');
            case 'Yellow':
                return container.getUiString('element_kind_yellow');
            case 'Green':
                return container.getUiString('element_kind_green');
            case 'White':
                return container.getUiString('element_kind_white');
            case 'Black':
                return container.getUiString('element_kind_black');
            default:
                return '';
        }
    }
    parseFull(id, container) {
        switch (id) {
            case 'Red':
                return container.getUiString('element_kind_red_full');
            case 'Blue':
                return container.getUiString('element_kind_blue_full');
            case 'Yellow':
                return container.getUiString('element_kind_yellow_full');
            case 'Green':
                return container.getUiString('element_kind_green_full');
            case 'White':
                return container.getUiString('element_kind_white_full');
            case 'Black':
                return container.getUiString('element_kind_black_full');
            default:
                return '';
        }
    }
    isElement(id) {
        return ['Red', 'Blue', 'Yellow', 'Green', 'White', 'Black'].includes(id);
    }
}
exports.Element = Element;
class Speciality {
    constructor() {
        this.method402 = this.parse;
    }
    method506(id) {
        switch (id) {
            case 'Knight':
                return 'type_knight';
            case 'Fighter':
                return 'type_fighter';
            case 'Ranged':
                return 'type_ranged';
            case 'Supporter':
                return 'type_supporter';
            case 'Special':
                return 'type_special';
            default:
                return '';
        }
    }
    parse(id, container) {
        return container.getUiString(this.method506(id));
    }
    isSpeciality(id) {
        return ['Knight', 'Fighter', 'Ranged', 'Supporter', 'Special'].includes(id);
    }
}
exports.Speciality = Speciality;
class Race {
    parse(id, _container) {
        let str = '';
        switch (id) {
            case 'Human':
                str = '人';
                break;
            case 'Beast':
                str = '獣';
                break;
            case 'Mystery':
                str = '妖';
                break;
            case 'Element':
                str = '精霊';
                break;
            case 'Dragon':
                str = 'ドラゴン';
                break;
            case 'Machine':
                str = '機械';
                break;
            case 'Devil':
                str = '魔';
                break;
            case 'Plants':
                str = '植物';
                break;
            case 'Aquatic':
                str = '水棲';
                break;
            case 'Undead':
                str = '不死';
                break;
            case 'Breakableblock':
                str = '破壊可能障害物';
                break;
        }
        return str;
    }
    isRace(id) {
        return [
            'Human',
            'Beast',
            'Mystery',
            'Element',
            'Dragon',
            'Machine',
            'Devil',
            'Plants',
            'Aquatic',
            'Undead',
            'Breakableblock'
        ].includes(id);
    }
}
exports.Race = Race;
class Gender {
    constructor() {
        this.method403 = this.parse;
    }
    parse(id, container) {
        let str = '';
        switch (id) {
            case 'Female':
                str = 'gender_female';
                break;
            case 'Male':
                str = 'gender_male';
                break;
            case 'Unknown':
                str = 'gender_unknown';
                break;
        }
        return container.getUiString(str);
    }
    isGender(id) {
        return ['Female', 'Male', 'Unknown'].includes(id);
    }
}
exports.Gender = Gender;
class CharacterTag {
    isCharacterTag(id) {
        return [''].includes(id);
    }
}
exports.CharacterTag = CharacterTag;
class CharacterGroup {
    static isType(str) {
        if (CharacterGroup.Element.isElement(str)) {
            return 'Element';
        }
        if (CharacterGroup.Speciality.isSpeciality(str)) {
            return 'Speciality';
        }
        if (CharacterGroup.Race.isRace(str)) {
            return 'Race';
        }
        if (CharacterGroup.Gender.isGender(str)) {
            return 'Gender';
        }
        if (CharacterGroup.CharacterTag.isCharacterTag(str)) {
            return 'CharacterTag';
        }
        return '';
    }
}
exports.CharacterGroup = CharacterGroup;
CharacterGroup.Element = new Element();
CharacterGroup.Speciality = new Speciality();
CharacterGroup.Race = new Race();
CharacterGroup.Gender = new Gender();
CharacterGroup.CharacterTag = new CharacterTag();
//# sourceMappingURL=character-group.js.map