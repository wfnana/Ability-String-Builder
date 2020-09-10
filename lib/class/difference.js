"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Difference = void 0;
const compare_1 = require("../compare");
const content_1 = require("../during/content");
const trigger_1 = require("../during/trigger");
const content_2 = require("../instant/content");
const trigger_2 = require("../instant/trigger");
const precondition_1 = require("../precondition");
class Difference {
    constructor(abi1, abi2, container) {
        this.abi1 = abi1;
        this.abi2 = abi2;
        this.container = container;
        this.differentThreshold = false;
        this.differentStrength = false;
        this.differentPreconditionThreshold = false;
        this.differentFrame = false;
        switch (abi1.type) {
            case 'Instant':
                break;
            case 'During':
                break;
            case 'OpeningContent':
                break;
        }
    }
    surroundIfDiff(param1, param2) {
        if (param1) {
            return this.container.getUiStringWithContext('mana_board_learn_window_ability_additional_learned_description_difference', {
                content: param2
            });
        }
        return param2;
    }
    notEqualsFloat(param1, param2) {
        return Number(Math.abs(param1 - param2)) > 1.0e-6;
    }
    diffPrecondition(param1, param2) {
        const param1kind = param1.convert('AbilityPreconditionKind');
        const param2kind = param2.convert('AbilityPreconditionKind');
        if (param1kind !== param2kind)
            return;
        switch (param1kind) {
            case 'Initial':
                this.diffInitialAbilityTriggerKind(param1, param2, true);
                break;
            case 'During':
                this.diffDuringTrigger(param1, param2, true);
                break;
        }
    }
    diffOpeningContentAbilityKind(param1, param2) {
        var _a, _b, _c, _d, _e, _f;
        const param1kind = param1.convert('OpeningContentAbilityKind');
        const param2kind = param2.convert('OpeningContentAbilityKind');
        if (param1kind !== param2kind)
            return;
        switch (param1kind) {
            case 'MyselfExpBoost':
                this.differentStrength =
                    Number(Math.abs(Number((_a = param1.strength) === null || _a === void 0 ? void 0 : _a.firstMax) -
                        Number((_b = param2.strength) === null || _b === void 0 ? void 0 : _b.firstMax))) > 1.0e-6;
                break;
            case 'AllyExpBoost':
                this.differentStrength =
                    Number(Math.abs(Number((_c = param1.strength) === null || _c === void 0 ? void 0 : _c.firstMax) -
                        Number((_d = param2.strength) === null || _d === void 0 ? void 0 : _d.firstMax))) > 1.0e-6;
                break;
            case 'ManaBoost':
                this.differentStrength =
                    Number(Math.abs(Number((_e = param1.strength) === null || _e === void 0 ? void 0 : _e.firstMax) -
                        Number((_f = param2.strength) === null || _f === void 0 ? void 0 : _f.firstMax))) > 1.0e-6;
                break;
        }
    }
    diffInstantTrigger(param1, param2) {
        const param1kind = param1.convert('InstantAbilityTriggerKind');
        const param2kind = param2.convert('InstantAbilityTriggerKind');
        if (param1kind !== param2kind)
            return;
        switch (param1kind) {
            case 'Initial':
                this.diffInitialAbilityTriggerKind(param1, param2, false);
                break;
            case 'Battle':
                this.diffInstantBattleAbilityTriggerKind(param1, param2);
                break;
        }
    }
    diffInstantContent(param1, param2) {
        const param1kind = param1.convert('InstantAbilityContent');
        const param2kind = param2.convert('InstantAbilityContent');
        if (param1kind !== param2kind)
            return;
        switch (param1kind) {
            case 'ConditionCharacter':
                this.differentFrame = !compare_1.equal(param1.frame, param2.frame);
                break;
            case 'ConditionBattle':
                this.differentFrame = !compare_1.equal(param1.frame, param2.frame);
                break;
            case 'Common':
                break;
            case 'DurationTimeCharacter':
                this.differentFrame = !compare_1.equal(param1.frame, param2.frame);
                break;
            case 'InstantCharacter':
                break;
            case 'InstantBattle':
                break;
        }
    }
    diffInstantBattleAbilityTriggerKind(param1, param2) {
        const param1kind = param1.convert('InstantBattleAbilityTriggerKind');
        const param2kind = param2.convert('InstantBattleAbilityTriggerKind');
        if (param1kind !== param2kind)
            return;
        switch (param1kind) {
            case 'Count':
                this.differentThreshold = !compare_1.equal(param1.threshold, param2.threshold);
                break;
            case 'CharacterCount':
                this.differentThreshold = !compare_1.equal(param1.threshold, param2.threshold);
                break;
            case 'Combo':
                this.differentThreshold = !compare_1.equal(param1.threshold, param2.threshold);
                break;
            case 'HpLow':
                this.differentThreshold = !compare_1.equal(param1.threshold, param2.threshold);
                break;
            case 'HealHigh':
                this.differentThreshold = !compare_1.equal(param1.threshold, param2.threshold);
                break;
            case 'ElapsedTime':
                this.differentThreshold = !compare_1.equal(param1.threshold, param2.threshold);
                break;
            case 'Condition':
                this.differentThreshold = !compare_1.equal(param1.threshold, param2.threshold);
                break;
            case 'EnemyCondition':
                this.differentThreshold = !compare_1.equal(param1.threshold, param2.threshold);
                break;
        }
    }
    diffInstantAbilityInstantCharacterContent(param1, param2) {
        const param1kind = param1.convert('InstantAbilityInstantCharacterContent');
        const param2kind = param2.convert('InstantAbilityInstantCharacterContent');
        if (param1kind !== param2kind)
            return;
        switch (param1kind) {
            case 'CoffinBaseCountDown':
                this.differentStrength = !compare_1.equal(param1.strength, param2.strength);
                break;
            case 'CoffinBaseCountUp':
                this.differentStrength = !compare_1.equal(param1.strength, param2.strength);
                break;
            case 'Hp':
                this.differentStrength = !compare_1.equal(param1.strength, param2.strength);
                break;
            case 'RatioHeal':
                this.differentStrength = !compare_1.equal(param1.strength, param2.strength);
                break;
            case 'FixedHeal':
                this.differentStrength = !compare_1.equal(param1.strength, param2.strength);
                break;
            case 'RatioDamageMaxHp':
                this.differentStrength = !compare_1.equal(param1.strength, param2.strength);
                break;
            case 'RatioDamageCurrentHp':
                this.differentStrength = !compare_1.equal(param1.strength, param2.strength);
                break;
            case 'FixedDamage':
                this.differentStrength = !compare_1.equal(param1.strength, param2.strength);
                break;
            case 'SkillGauge':
                this.differentStrength = !compare_1.equal(param1.strength, param2.strength);
                break;
            case 'ConditionExtend':
                this.differentStrength = !compare_1.equal(param1.strength, param2.strength);
                break;
            case 'Barrier':
                this.differentStrength = !compare_1.equal(param1.strength, param2.strength);
                break;
            case 'EnemyDamage':
                this.differentStrength = !compare_1.equal(param1.strength, param2.strength);
                break;
            case 'CountUp':
                this.differentStrength = !compare_1.equal(param1.strength, param2.strength);
                break;
        }
    }
    diffInstantAbilityInstantBattleContent(param1, param2) {
        const param1kind = param1.convert('InstantAbilityInstantBattleContent');
        const param2kind = param2.convert('InstantAbilityInstantBattleContent');
        if (param1kind !== param2kind)
            return;
        switch (param1kind) {
            case 'AddFeverPoint':
                this.differentStrength = !compare_1.equal(param1.strength, param2.strength);
                break;
            case 'AddCombo':
                this.differentStrength = !compare_1.equal(param1.strength, param2.strength);
                break;
            case 'CountUp':
                this.differentStrength = !compare_1.equal(param1.strength, param2.strength);
                break;
        }
    }
    diffInstantAbilityDurationTimeCharacterContent(param1, param2) {
        const param1kind = param1.convert('InstantAbilityDurationTimeCharacterContent');
        const param2kind = param2.convert('InstantAbilityDurationTimeCharacterContent');
        if (param1kind !== param2kind)
            return;
        switch (param1kind) {
            case 'EaseOfHeal':
                this.differentStrength = !compare_1.equal(param1.strength, param2.strength);
                break;
            case 'Scapegoat':
                break;
            case 'AdditionalDirectAttack':
                this.differentStrength = !compare_1.equal(param1.strength, param2.strength);
                break;
            case 'ConditionPrevent':
                this.differentStrength = !compare_1.equal(param1.strength, param2.strength);
                break;
        }
    }
    diffInstant(param1, param2) {
        this.diffPrecondition(new precondition_1.Precondition(param1.precondition), new precondition_1.Precondition(param2.precondition));
        this.diffInstantTrigger(new trigger_2.InstantTrigger(param1.instantTrigger), new trigger_2.InstantTrigger(param2.instantTrigger));
        this.diffInstantContent(new content_2.InstantContent(param1.instantContent), new content_2.InstantContent(param2.instantContent));
    }
    diffInitialAbilityTriggerKind(param1, param2, param3) {
        const param1kind = param1.convert('InitialAbilityTriggerKind');
        const param2kind = param2.convert('InitialAbilityTriggerKind');
        if (param1kind !== param2kind)
            return;
        switch (param1kind) {
            case 'Always':
                break;
            case 'Member':
                if (param3) {
                    this.differentPreconditionThreshold = !compare_1.equal(param1.threshold, param2.threshold);
                }
                else {
                    this.differentThreshold = !compare_1.equal(param1.threshold, param2.threshold);
                }
                break;
            case 'MySelf':
                break;
            case 'UnisonMyself':
                break;
            case 'LeaderCharacter':
                break;
            case 'SecondCharacter':
                break;
            case 'ThirdCharacter':
                break;
            case 'Variety':
                if (param3) {
                    this.differentPreconditionThreshold = !compare_1.equal(param1.threshold, param2.threshold);
                }
                else {
                    this.differentThreshold = !compare_1.equal(param1.threshold, param2.threshold);
                }
                break;
            case 'Leader':
                break;
        }
    }
    diffDuringTrigger(param1, param2, param3) {
        const param1kind = param1.convert('DuringAbilityTriggerKind');
        const param2kind = param2.convert('DuringAbilityTriggerKind');
        if (param1kind !== param2kind)
            return;
        switch (param1kind) {
            case 'Character':
                this.diffDuringCharacterAbilityTriggerKind(param1, param2, param3);
                break;
            case 'Battle':
                this.diffDuringBattleAbilityTriggerKind(param1, param2);
                break;
        }
    }
    diffDuringCharacterAbilityTriggerKind(param1, param2, param3) {
        const param1kind = param1.convert('DuringCharacterAbilityTriggerKind');
        const param2kind = param2.convert('DuringCharacterAbilityTriggerKind');
        if (param1kind !== param2kind)
            return;
        switch (param1kind) {
            case 'Hp':
                if (param3) {
                    this.differentPreconditionThreshold = !compare_1.equal(param1.threshold, param2.threshold);
                }
                else {
                    this.differentThreshold = !compare_1.equal(param1.threshold, param2.threshold);
                }
                break;
            case 'Condition':
                if (param3) {
                    this.differentPreconditionThreshold = !compare_1.equal(param1.threshold, param2.threshold);
                }
                else {
                    this.differentThreshold = !compare_1.equal(param1.threshold, param2.threshold);
                }
                break;
            case 'Barrier':
                break;
            case 'ParameterUp':
                this.differentThreshold = !compare_1.equal(param1.threshold, param2.threshold);
                break;
        }
    }
    diffDuringBattleAbilityTriggerKind(param1, param2) {
        const param1kind = param1.convert('DuringBattleAbilityTriggerKind');
        const param2kind = param2.convert('DuringBattleAbilityTriggerKind');
        if (param1kind !== param2kind)
            return;
        switch (param1kind) {
            case 'Combo':
                this.differentThreshold = !compare_1.equal(param1.threshold, param2.threshold);
                break;
            case 'Enemy':
                this.differentThreshold = !compare_1.equal(param1.threshold, param2.threshold);
                break;
            case 'Fever':
                break;
            case 'Multiball':
                this.differentThreshold = !compare_1.equal(param1.threshold, param2.threshold);
                break;
            case 'Condition':
                this.differentThreshold = !compare_1.equal(param1.threshold, param2.threshold);
                break;
            case 'ParameterUp':
                this.differentThreshold = !compare_1.equal(param1.threshold, param2.threshold);
                break;
        }
    }
    diffDuring(param1, param2) {
        this.diffPrecondition(new precondition_1.Precondition(param1.precondition), new precondition_1.Precondition(param2.precondition));
        this.diffDuringTrigger(new trigger_1.DuringTrigger(param1.duringTrigger), new trigger_1.DuringTrigger(param2.duringTrigger), false);
        this.diffCommonAbilityContent(new content_1.DuringContent(param1.duringContent), new content_1.DuringContent(param2.duringContent));
    }
    diffConditionChangeContent(param1, param2) {
        const param1kind = param1.convert('ConditionChangeContent');
        const param2kind = param2.convert('ConditionChangeContent');
        if (param1kind !== param2kind)
            return;
        switch (param1kind) {
            case 'AttackPoint':
                this.differentStrength = !compare_1.equal(param1.strength, param2.strength);
                break;
            case 'SkillDamage':
                this.differentStrength = !compare_1.equal(param1.strength, param2.strength);
                break;
            case 'ElementResistance':
                this.differentStrength = !compare_1.equal(param1.strength, param2.strength);
                break;
            case 'ElementDamageCut':
                this.differentStrength = !compare_1.equal(param1.strength, param2.strength);
                break;
            case 'CharacterSlayer':
                this.differentStrength = !compare_1.equal(param1.strength, param2.strength);
                break;
            case 'Regeneration':
                this.differentStrength = !compare_1.equal(param1.strength, param2.strength);
                break;
            case 'Poison':
                this.differentStrength = !compare_1.equal(param1.strength, param2.strength);
                break;
            case 'Invincible':
                break;
            case 'Paralysis':
                break;
            case 'Frozen':
                break;
            case 'FeverPoint':
                this.differentStrength = !compare_1.equal(param1.strength, param2.strength);
                break;
            case 'Stunify':
                this.differentStrength = !compare_1.equal(param1.strength, param2.strength);
                break;
            case 'PinchSlayer':
                this.differentStrength = !compare_1.equal(param1.strength, param2.strength);
                break;
            case 'DebuffResistance':
                this.differentStrength = !compare_1.equal(param1.strength, param2.strength);
                break;
            case 'Piercing':
                break;
            case 'Flying':
                break;
            case 'PowerFlipDamage':
                this.differentStrength = !compare_1.equal(param1.strength, param2.strength);
                break;
            case 'DirectDamage':
                this.differentStrength = !compare_1.equal(param1.strength, param2.strength);
                break;
            case 'Silence':
                break;
            case 'AdditionalDirectAttack':
                this.differentStrength = !compare_1.equal(param1.strength, param2.strength);
                break;
            case 'Speedup':
                this.differentStrength = !compare_1.equal(param1.strength, param2.strength);
                break;
        }
    }
    diffCommonAbilityContent(param1, param2) {
        const param1kind = param1.convert('CommonAbilityContent');
        const param2kind = param2.convert('CommonAbilityContent');
        if (param1kind !== param2kind)
            return;
        switch (param1kind) {
            case 'AttackPoint':
                this.differentStrength = !compare_1.equal(param1.strength, param2.strength);
                break;
            case 'DirectDamage':
                this.differentStrength = !compare_1.equal(param1.strength, param2.strength);
                break;
            case 'SkillDamage':
                this.differentStrength = !compare_1.equal(param1.strength, param2.strength);
                break;
            case 'SkillGaugeCharging':
                this.differentStrength = !compare_1.equal(param1.strength, param2.strength);
                break;
            case 'ElementResistance':
                this.differentStrength = !compare_1.equal(param1.strength, param2.strength);
                break;
            case 'ElementDamageCut':
                this.differentStrength = !compare_1.equal(param1.strength, param2.strength);
                break;
            case 'FeverPoint':
                this.differentStrength = !compare_1.equal(param1.strength, param2.strength);
                break;
            case 'Stunify':
                this.differentStrength = !compare_1.equal(param1.strength, param2.strength);
                break;
            case 'CharacterSlayer':
                this.differentStrength = !compare_1.equal(param1.strength, param2.strength);
                break;
            case 'PinchSlayer':
                this.differentStrength = !compare_1.equal(param1.strength, param2.strength);
                break;
            case 'DebuffResistance':
                this.differentStrength = !compare_1.equal(param1.strength, param2.strength);
                break;
            case 'EaseOfHeal':
                this.differentStrength = !compare_1.equal(param1.strength, param2.strength);
                break;
            case 'Scapegoat':
                break;
            case 'AdditionalDirectAttack':
                this.differentStrength = !compare_1.equal(param1.strength, param2.strength);
                break;
            case 'PoisonStrength':
                this.differentStrength = !compare_1.equal(param1.strength, param2.strength);
                break;
            case 'ConditionPrevent':
                break;
            case 'ConditionSlayer':
                this.differentStrength = !compare_1.equal(param1.strength, param2.strength);
                break;
            case 'ConditionShare':
                this.differentStrength = !compare_1.equal(param1.strength, param2.strength);
                break;
            case 'SecondSkillGauge':
                this.differentStrength = !compare_1.equal(param1.strength, param2.strength);
                break;
            case 'ResistanceToConditionEnemy':
                this.differentStrength = !compare_1.equal(param1.strength, param2.strength);
                break;
        }
    }
    diffCommonAbilityBattleContent(param1, param2) {
        const param1kind = param1.convert('CommonAbilityBattleContent');
        const param2kind = param2.convert('CommonAbilityBattleContent');
        if (param1kind !== param2kind)
            return;
        switch (param1kind) {
            case 'PowerFlipDamage':
                this.differentStrength = !compare_1.equal(param1.strength, param2.strength);
                break;
            case 'PowerFlipLv1Damage':
                this.differentStrength = !compare_1.equal(param1.strength, param2.strength);
                break;
            case 'PowerFlipLv2Damage':
                this.differentStrength = !compare_1.equal(param1.strength, param2.strength);
                break;
            case 'PowerFlipLv3Damage':
                this.differentStrength = !compare_1.equal(param1.strength, param2.strength);
                break;
            case 'FeverTime':
                this.differentStrength = !compare_1.equal(param1.strength, param2.strength);
                break;
            case 'PowerFlipComboCountDown':
                this.differentStrength = !compare_1.equal(param1.strength, param2.strength);
                break;
            case 'Speedup':
                this.differentStrength = !compare_1.equal(param1.strength, param2.strength);
                break;
        }
    }
    convertThreshold(param1, param2) {
        if (param2) {
            return this.surroundIfDiff(this.differentPreconditionThreshold, param1);
        }
        return this.surroundIfDiff(this.differentThreshold, param1);
    }
    convertStrength(param1) {
        return this.surroundIfDiff(this.differentStrength, param1);
    }
    convertFrame(param1) {
        return this.surroundIfDiff(this.differentFrame, param1);
    }
}
exports.Difference = Difference;
//# sourceMappingURL=difference.js.map