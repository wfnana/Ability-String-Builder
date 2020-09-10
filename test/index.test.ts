import { AbilityStringBuilder } from '../lib';
import { Container } from '../lib/class/container';
import {
  ComplimentOiran,
  DuringHPLow,
  EnemyDamage,
  EnemyLow,
  LampGuideLeader,
  MiaLeaderAbility,
  MultiDuringWithSlash,
  MultiInstantWithAnd,
  MultiInstantWithSlash,
  MultiInstantWithSlash2,
  NegativeCount,
  SecondSkillGuage,
  SingleInstant,
  TargetLeader
} from './files/ability';
import { ja } from './files/strings';

const container = new Container(ja);
const builder = new AbilityStringBuilder(container);

describe('index', function () {
  it('SingleInstant - alk', function () {
    const grouped = builder.groupByTrigger(SingleInstant);
    const result = builder.stringfy(grouped);
    expect(result).toEqual('パーティ全体の攻撃力 + 10 %');
  });

  it('MultiInstantWithSlash - lightbullet_wiz_ny20', function () {
    const grouped = builder.groupByTrigger(MultiInstantWithSlash);
    const result = builder.stringfy(grouped);
    expect(result).toEqual(
      'メインキャラに編成時、水属性キャラがスキルを発動する度、自身のスキルダメージ + 20 %[最大 + 100 % ] ＆ スキルゲージ + 10 %'
    );
  });

  it('MultiInstantWithAnd - battle_maid_xm19', function () {
    const grouped = builder.groupByTrigger(MultiInstantWithAnd);
    const result = builder.stringfy(grouped);
    expect(result).toEqual(
      'メインキャラに編成時、自身がスキルを発動する度、火属性キャラのスキルゲージ + 10 % ＆ 計 3 回まで最大HPの 5 % 回復'
    );
  });

  it('MultiDuringWithSlash - ice_witch', function () {
    const grouped = builder.groupByTrigger(MultiDuringWithSlash);
    const result = builder.stringfy(grouped);
    expect(result).toEqual(
      'メインキャラに編成時、水属性キャラがHP 80 % 以上の間、そのキャラの火属性耐性 + 30 % ＆ 攻撃力 + 60 %'
    );
  });

  it('SecondSkillGuage - 5040019', function () {
    const grouped = builder.groupByTrigger(SecondSkillGuage);
    const result = builder.stringfy(grouped);
    expect(result).toEqual(
      '自身が火属性キャラである度、スキルがヒットする度、自身の攻撃力 + 1 %[最大 + 120 % ] ／ 自身がスキルを発動する度、火属性キャラのスキルダメージ + 30 %[最大 + 120 % ] ／ 自身が火属性キャラである度、自身 のスキルゲージ最大値 + 40 % '
    );
  });

  it('NegativeCount - wind_dragon', function () {
    const grouped = builder.groupByTrigger(NegativeCount);
    const result = builder.stringfy(grouped);
    expect(result).toEqual(
      'メインキャラに編成時、コンボ表示が 50 に到達する度、パワーフリップLv3ダメージ + 5 %[最大 + 50 % ] ／ メインキャラに編成時、パワーフリップLv3に必要なコンボ数 + 10'
    );
  });

  it('ComplimentOiran - compliment_oiran', function () {
    const grouped = builder.groupByTrigger(ComplimentOiran);
    const result = builder.stringfy(grouped);
    expect(result).toEqual(
      '火属性キャラの攻撃力 + 30 % ／ マルチボールの攻撃力 + 150 % ＆ HP + 25 %'
    );
  });

  it('EnemyDamage - lamp_guide', function () {
    const grouped = builder.groupByTrigger(EnemyDamage);
    const result = builder.stringfy(grouped);
    expect(result).toEqual(
      'メインキャラに編成時、自身のHP + 20 % ／ メインキャラに編成時、スキルを発動する度、敵全体に自身の最大HPの 30 倍の威力を持つ光ダメージ'
    );
  });

  it('LampGuideLeader - lamp_guide', function () {
    const grouped = builder.groupByTrigger(LampGuideLeader);
    const result = builder.stringfy(grouped);
    expect(result).toEqual(
      '光属性キャラのHP + 15 % ／ リーダーがバリアを持っている間、光属性キャラの攻撃力 + 80 %'
    );
  });

  it('DuringHPLow - 5100006', function () {
    const grouped = builder.groupByTrigger(DuringHPLow);
    const result = builder.stringfy(grouped);
    expect(result).toEqual(
      'パーティキャラ全員がHP 50 % 以下の間、闇属性キャラのスキルダメージ + 140 % ／ 闇属性キャラのHPが 20 % 以下になる度、計 4 回までそのキャラを最大HPの 5 % 回復 ／ 闇属性キャラがスキルを発動する度、計 3 回までそのキャラのスキルゲージ + 10 %'
    );
  });

  it('TargetLeader - black_wolf_knight', function () {
    const grouped = builder.groupByTrigger(TargetLeader);
    const result = builder.stringfy(grouped);
    expect(result).toEqual(
      '貫通効果中の間、自身の攻撃力 + 20 % ＆ リーダーの攻撃力 + 40 %'
    );
  });

  it('MultiInstantWithSlash2 - mighty_striker', function () {
    const grouped = builder.groupByTrigger(MultiInstantWithSlash2);
    const result = builder.stringfy(grouped);
    expect(result).toEqual(
      'メインキャラに編成時、30コンボ時、自身の攻撃力 + 30 %[最大 + 30 % ] ／ メインキャラに編成時、50コンボ時、自身の攻撃力 + 50 %[最大 + 50 % ] ／ メインキャラに編成時、100コンボ時、自身の攻撃力 + 100 %[最大 + 100 % ]'
    );
  });

  it('MiaLeaderAbility - tiger_treasure_hunter', function () {
    const grouped = builder.groupByTrigger(MiaLeaderAbility);
    const result = builder.stringfy(grouped);
    expect(result).toEqual(
      '獲得マナ 5 % アップ ／ 風属性キャラの攻撃力 + 15 % ＆ HP + 10 %'
    );
  });

  it('EnemyLow - samurai_xm19', function () {
    const grouped = builder.groupByTrigger(EnemyLow);
    const result = builder.stringfy(grouped);
    expect(result).toEqual('敵が 1 体以下の間、自身の攻撃力 + 60 %');
  });
});
