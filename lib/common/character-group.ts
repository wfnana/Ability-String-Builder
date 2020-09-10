import { Container } from '../class/container';

export class Element {
  method568 = this.parse;
  parse(id: string, container: Container) {
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

  method401 = this.parseFull;
  parseFull(id: string, container: Container) {
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

  isElement(id: string): boolean {
    return ['Red', 'Blue', 'Yellow', 'Green', 'White', 'Black'].includes(id);
  }
}

export class Speciality {
  method506(id: string): string {
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

  method402 = this.parse;
  parse(id: string, container: Container): string {
    return container.getUiString(this.method506(id));
  }

  isSpeciality(id: string): boolean {
    return ['Knight', 'Fighter', 'Ranged', 'Supporter', 'Special'].includes(id);
  }
}

export class Race {
  parse(id: string, _container: Container): string {
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

  isRace(id: string): boolean {
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

export class Gender {
  method403 = this.parse;
  parse(id: string, container: Container): string {
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

  isGender(id: string): boolean {
    return ['Female', 'Male', 'Unknown'].includes(id);
  }
}

export class CharacterTag {
  isCharacterTag(id: string): boolean {
    return [''].includes(id);
  }
}

export class CharacterGroup {
  static Element = new Element();
  static Speciality = new Speciality();
  static Race = new Race();
  static Gender = new Gender();
  static CharacterTag = new CharacterTag();

  static isType(str: string): string {
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
