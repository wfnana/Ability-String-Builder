/* eslint-disable quotes */
export const ja = {
  ability_description_character_group_race_brackets: '種族「::race::」',
  ability_description_not_unisonable_full: 'メインキャラに編成時、',
  ability_description_not_unisonable_icon: "<icon id='main'>",
  ability_description_character_group_speciality_suffix: 'タイプ',
  ability_description_target_separator_or: 'または',
  ability_description_target_separator: '、',
  ability_description_target_myself: '自身',
  ability_description_target_leader: 'リーダー',
  ability_description_target_ally_all: 'パーティ全体',
  ability_description_target_ally_constraint: '::constraint::',
  ability_description_target_total_of_ally_all_during: 'パーティキャラ全員',
  ability_description_target_total_of_ally_constraint_during:
    '::constraint::全員',
  ability_description_target_total_of_ally_all_instant: 'パーティキャラ',
  ability_description_target_total_of_ally_constraint_instant: '::constraint::',
  ability_description_target_one_of_ally_all: 'パーティキャラ',
  ability_description_target_one_of_ally_constraint: '::constraint::',
  ability_description_target_others_all: '自身以外の味方',
  ability_description_target_others_constraint: '自身以外の::constraint::',
  ability_description_target_total_of_others_all: '自身以外',
  ability_description_target_total_of_others_constraint:
    '自身以外の::constraint::',
  ability_description_target_one_of_others_all: '自身以外のキャラ',
  ability_description_target_one_of_others_constraint:
    '自身以外の::constraint::',
  ability_description_target_member_at: '::index::番目のキャラ',
  ability_description_target_unison_party:
    '::constraint::がユニゾンされているキャラ',
  ability_description_target_trigger_puller: 'そのキャラ',
  ability_description_target_multiball: 'マルチボール',
  ability_description_target_min_hp_absolute: '最も残HPが低いパーティメンバー',
  ability_description_target_min_hp_relative:
    '最も残HP割合が低いパーティメンバー',
  ability_description_target_min_hp_absolute_except_myself:
    '自身以外の最も残HPが低いパーティメンバー',
  ability_description_target_min_hp_relative_except_myself:
    '自身以外の最も残HP割合が低いパーティメンバー',
  ability_description_opening_kind_myself_exp_boost:
    '自身の獲得EXP ::percent:: アップ',
  ability_description_opening_kind_ally_exp_boost:
    'パーティ全体の獲得EXP ::percent:: アップ',
  ability_description_opening_kind_mana_boost: '獲得マナ ::percent:: アップ',
  ability_description_instant_trigger_limit_once: '一度だけ',
  ability_description_instant_trigger_limit_n_times: '計 ::count:: 回まで',
  ability_description_instant_conjunction_trigger_limit_once: '時、',
  ability_description_instant_conjunction_trigger_limit_n_times: '度、',
  ability_description_instant_conjunction_trigger_limit_no_limit: '度、',
  ability_description_instant_max_strength: '[最大 ::max_strength:: ]',
  ability_description_instant_max_accumulation:
    '[累積効果 / 最大 ::max_strength:: ]',
  ability_description_only_real: '実際に',
  ability_description_n_times: '::count:: 回',
  ability_description_times: '::strength:: 倍',
  ability_description_percent: '::percent:: %',
  ability_description_percent_up: '+ ::percent:: %',
  ability_description_percent_down: '‑ ::percent:: %',
  ability_description_count_up:
    '::if (0 <= count)::+ ::count::::else::‑ ::(-count)::::end::',
  ability_description_count_down:
    '::if (0 <= count)::‑ ::count::::else::+ ::(-count)::::end::',
  ability_description_instant_trigger_kind_power_flip:
    'パワーフリップ::if once::::else::する::end::',
  ability_description_instant_trigger_kind_power_flip_lv:
    'パワーフリップLv::level::::if once::を発動::else::を発動する::end::',
  ability_description_instant_trigger_kind_dash:
    'ダッシュ::if once::::else::する::end::',
  ability_description_instant_trigger_kind_ball_flip:
    'ボールをフリップ::if once::::else::する::end::',
  ability_description_instant_trigger_kind_fever:
    'フィーバー::if once::::else::する::end::',
  ability_description_instant_trigger_kind_multiball_appear:
    'マルチボールが出現::if once::::else::する::end::',
  ability_description_instant_trigger_kind_first_flip: 'バトル開始時、',
  ability_description_instant_trigger_kind_enemy_kill:
    '敵を撃破::if once::::else::する::end::',
  ability_description_instant_trigger_kind_fever_point_added_by_abiility:
    'アビリティによってフィーバーゲージが増加::if once::::else::する::end::',
  ability_description_instant_trigger_kind_revival:
    '::if !omittable::::triggerPuller::が::end::棺桶状態から復帰::if once::::else::する::end::',
  ability_description_instant_trigger_kind_heal_count:
    '::if !omittable::::triggerPuller::が::end::HP回復::if once::::else::する::end::',
  ability_description_instant_trigger_kind_damage_count:
    '::if !omittable::::triggerPuller::が::end::ダメージを受け::if once::た::else::る::end::',
  ability_description_instant_trigger_kind_direct_attack:
    '::if !omittable::::triggerPuller::が::end::直接攻撃を::if once::::else::する::end::',
  ability_description_instant_trigger_kind_skill_invoke:
    '::if !omittable::::triggerPuller::が::end::スキルを発動::if once::::else::する::end::',
  ability_description_instant_trigger_kind_skill_max:
    '::if !omittable::::triggerPuller::の::end::スキルゲージが最大::if once::::else::になる::end::',
  ability_description_instant_trigger_kind_skill_hit:
    '::if !omittable::::triggerPuller::の::end::スキルがヒット::if once::::else::する::end::',
  ability_description_instant_trigger_kind_one_of_enemy_skill_hit:
    '::if !omittable::::triggerPuller::の::end::スキルが1つの敵にヒット::if once::::else::する::end::',
  ability_description_instant_trigger_kind_combo:
    '::count::コンボ::if once::::else::する::end::',
  ability_description_instant_trigger_kind_combo_display:
    'コンボ表示が ::count:: に到達::if once::::else::する::end::',
  ability_description_instant_trigger_kind_elapsed_time:
    '::second:: 秒経過::if once::::else::する::end::',
  ability_description_instant_trigger_kind_hp_low:
    '::if !omittable::::triggerPuller::の::end::HPが ::percent:: 以下に::if once::なった::else::なる::end::',
  ability_description_instant_trigger_kind_heal_high:
    '::if !omittable::::triggerPuller::のHPが一度に::end:: ::count:: 以上の回復を::if once::した::else::する::end::',
  ability_description_instant_trigger_kind_condition:
    '::if !omittable::::triggerPuller::が::end::::condition::::if once::::else::になる::end::',
  ability_description_instant_trigger_kind_enemy_condition:
    '敵が::condition::::if once::::else::になる::end::',
  ability_description_instant_trigger_kind_one_of_enemy_condition:
    '1つの敵が::condition::::if once::::else::になる::end::',
  ability_description_instant_trigger_kind_myself: '自身が::constraint::である',
  ability_description_instant_trigger_kind_leader:
    '::if !omittable::自身が::end::リーダーである',
  ability_description_instant_trigger_kind_unison_myself:
    '自身に::constraint::がユニゾンされている',
  ability_description_instant_trigger_kind_leader_character:
    'リーダーが::constraint::の',
  ability_description_instant_trigger_kind_second_character:
    '2番目のキャラが::constraint::の',
  ability_description_instant_trigger_kind_third_character:
    '3番目のキャラが::constraint::の',
  ability_description_instant_trigger_kind_member:
    'パーティに::constraint::を ::count:: 体::if once::以上編成した::else::編成する::end::',
  ability_description_instant_trigger_kind_variety:
    'パーティに編成されるキャラの::varietyKind::が ::count:: 種類::if once::以上の::else::増える::end::',
  ability_description_during_trigger_kind_hp_low:
    '::if !omittable::::triggerPuller::が::end::HP ::percent:: 以下の間、',
  ability_description_during_trigger_kind_hp_high:
    '::if !omittable::::triggerPuller::が::end::HP ::percent:: 以上の間、',
  ability_description_during_trigger_kind_barrier:
    '::if !omittable::::triggerPuller::が::end::バリアを持っている間、',
  ability_description_during_trigger_kind_combo_low:
    '::count:: コンボ以下の間、',
  ability_description_during_trigger_kind_combo_high:
    '::count:: コンボ以上の間、',
  ability_description_during_trigger_kind_enemy_low:
    '敵が ::count:: 体以下の間、',
  ability_description_during_trigger_kind_enemy_high:
    '敵が ::count:: 体以上の間、',
  ability_description_during_trigger_kind_fever: 'フィーバー中、',
  ability_description_during_trigger_kind_multiball:
    'マルチボールが ::count:: 個以上の間、',
  ability_description_during_trigger_kind_condition:
    '::if !omittable::::triggerPuller::が::end::::condition::中の間、',
  ability_description_during_trigger_kind_condition_count:
    '::if !omittable::::triggerPuller::に::end::かかっているコンディションによる::condition::::count::個につき、',
  ability_description_during_trigger_kind_attack_up:
    '::if !omittable::::triggerPuller::の::end::攻撃力が ::percent:: 以上アップしている間、',
  ability_description_during_trigger_kind_skill_damage_up:
    '::if !omittable::::triggerPuller::の::end::スキルダメージが ::percent:: 以上アップしている間、',
  ability_description_during_trigger_kind_fever_point_up:
    '::if !omittable::::triggerPuller::の::end::攻撃によるフィーバーゲージ上昇率が ::percent:: 以上アップしている間、',
  ability_description_during_trigger_kind_stunify_up:
    '::if !omittable::::triggerPuller::の::end::敵へのダウンさせやすさが ::percent:: 以上アップしている間、',
  ability_description_during_trigger_kind_character_slayer_up:
    '::if !omittable::::triggerPuller::の::end::特定属性・種族・タイプ・性別へのダメージが合計 ::percent:: 以上アップしている間、',
  ability_description_during_trigger_kind_stunwince_slayer_up:
    '::if !omittable::::triggerPuller::の::end::ブレイク・ダウン中の敵に与えるダメージが ::percent:: 以上アップしている間、',
  ability_description_during_trigger_kind_debuff_resistance_up:
    '::if !omittable::::triggerPuller::の::end::弱体耐性が ::percent:: 以上アップしている間、',
  ability_description_during_trigger_kind_resistance_up:
    '::if !omittable::::triggerPuller::の::end::::element::耐性が ::percent:: 以上アップしている間、',
  ability_description_during_trigger_kind_condition_slayer_up:
    '::if !omittable::::triggerPuller::の::end::::condition::中の敵に与えるダメージが ::percent:: 以上アップしている間、',
  ability_description_during_trigger_kind_max_hp_up:
    '::if !omittable::::triggerPuller::の::end::最大HPが ::percent:: 以上アップしている間、',
  ability_description_during_trigger_kind_power_flip_damage_up:
    'パワーフリップダメージが ::percent:: 以上アップしている間、',
  ability_description_condition_content_attack:
    '::target::の攻撃力 ::percent_up_down::',
  ability_description_condition_content_attack_minimal:
    '攻撃力 ::percent_up_down::',
  ability_description_condition_content_direct_damage:
    '::target::の直接攻撃ダメージ ::percent_up_down::',
  ability_description_condition_content_direct_damage_minimal:
    '直接攻撃ダメージ ::percent_up_down::',
  ability_description_condition_content_skill_damage:
    '::target::のスキルダメージ ::percent_up_down::',
  ability_description_condition_content_skill_damage_minimal:
    'スキルダメージ ::percent_up_down::',
  ability_description_condition_content_element_resistance:
    '::target::の::element::耐性 ::percent_up_down::',
  ability_description_condition_content_element_resistance_minimal:
    '::element::耐性 ::percent_up_down::',
  ability_description_condition_content_element_damage_cut:
    '::target::の受ける::element::ダメージ::count::',
  ability_description_condition_content_element_damage_cut_minimal:
    '受ける::element:ダメージ::count::',
  ability_description_condition_content_invincible: '::target::に無敵効果',
  ability_description_condition_content_invincible_minimal: '無敵効果を付与',
  ability_description_condition_content_regeneration:
    '::target::に再生効果[効果 ::count:: 回復]',
  ability_description_condition_content_regeneration_minimal:
    '再生効果を付与[効果 ::count:: 回復]',
  ability_description_condition_content_poison:
    '::target::に毒効果を付与[効果 ::count:: ダメージ]',
  ability_description_condition_content_poison_minimal:
    '毒効果を付与[効果 ::count:: ダメージ]',
  ability_description_condition_content_paralysis: '::target::にマヒ効果を付与',
  ability_description_condition_content_paralysis_minimal: 'マヒ効果を付与',
  ability_description_condition_content_member_frozen:
    '::target::に無気力を付与',
  ability_description_condition_content_member_frozen_minimal: '無気力を付与',
  ability_description_condition_content_fever_point:
    '::target::の攻撃によるフィーバーゲージ上昇率 ::percent_up_down::',
  ability_description_condition_content_fever_point_minimal:
    '攻撃によるフィーバーゲージ上昇率 ::percent_up_down::',
  ability_description_condition_content_stunify:
    '::target::の敵へのダウンさせやすさ ::percent_up_down::',
  ability_description_condition_content_stunify_minimal:
    '敵へのダウンさせやすさ ::percent_up_down::',
  ability_description_condition_content_character_slayer:
    '::target::の::constraint::へのダメージ ::percent_up_down::',
  ability_description_condition_content_character_slayer_minimal:
    '::constraint::へのダメージ ::percent_up_down::',
  ability_description_condition_content_stun_wince_slayer:
    '::target::がブレイク・ダウン中の敵に与えるダメージ ::percent_up_down::',
  ability_description_condition_content_stun_wince_slayer_minimal:
    'ブレイク・ダウン中の敵に与えるダメージ ::percent_up_down::',
  ability_description_condition_content_debuf_resistance:
    '::target::の弱体耐性 ::percent_up_down::',
  ability_description_condition_content_debuf_resistance_minimal:
    '弱体耐性 ::percent_up_down::',
  ability_description_condition_content_silence: '沈黙効果',
  ability_description_condition_content_piercing: '貫通効果',
  ability_description_condition_content_flying: '浮遊効果',
  ability_description_condition_content_power_flip_damage:
    'パワーフリップダメージ ::percent_up_down::',
  ability_description_condition_content_speedup:
    'スピードアップ効果 ::percent_up_down::',
  ability_description_common_content_attack:
    '::target::の攻撃力 ::percent_up_down::',
  ability_description_common_content_attack_minimal:
    '攻撃力 ::percent_up_down::',
  ability_description_common_content_direct_damage:
    '::target::の直接攻撃ダメージ ::percent_up_down::',
  ability_description_common_content_direct_damage_minimal:
    '直接攻撃ダメージ ::percent_up_down::',
  ability_description_common_content_skill_damage:
    '::target::のスキルダメージ ::percent_up_down::',
  ability_description_common_content_skill_damage_minimal:
    'スキルダメージ ::percent_up_down::',
  ability_description_common_content_skill_gauge_chaging:
    '::target::のスキルチャージ速度 ::percent_up_down::',
  ability_description_common_content_skill_gauge_chaging_minimal:
    'スキルチャージ速度 ::percent_up_down::',
  ability_description_common_content_element_resistance:
    '::target::の::element::耐性 ::percent_up_down::',
  ability_description_common_content_element_resistance_minimal:
    '::element::耐性 ::percent_up_down::',
  ability_description_common_content_element_damage_cut:
    '::target::の受ける::element::ダメージ::count::',
  ability_description_common_content_element_damage_cut_minimal:
    '受ける::element:ダメージ::count::',
  ability_description_common_content_fever_point:
    '::target::の攻撃によるフィーバーゲージ上昇率 ::percent_up_down::',
  ability_description_common_content_fever_point_minimal:
    '攻撃によるフィーバーゲージ上昇率 ::percent_up_down::',
  ability_description_common_content_stunify:
    '::target::の敵へのダウンさせやすさ ::percent_up_down::',
  ability_description_common_content_stunify_minimal:
    '敵へのダウンさせやすさ ::percent_up_down::',
  ability_description_common_content_character_slayer:
    '::target::の::constraint::へのダメージ ::percent_up_down::',
  ability_description_common_content_character_slayer_minimal:
    '::constraint::へのダメージ ::percent_up_down::',
  ability_description_common_content_stun_wince_slayer:
    '::target::がブレイク・ダウン中の敵に与えるダメージ ::percent_up_down::',
  ability_description_common_content_stun_wince_slayer_minimal:
    'ブレイク・ダウン中の敵に与えるダメージ ::percent_up_down::',
  ability_description_common_content_debuf_resistance:
    '::target::の弱体耐性 ::percent_up_down::',
  ability_description_common_content_debuf_resistance_minimal:
    '弱体耐性 ::percent_up_down::',
  ability_description_common_content_power_flip_damage:
    'パワーフリップダメージ ::percent_up_down::',
  ability_description_common_content_power_flip_damage_lv:
    'パワーフリップLv::level::ダメージ ::percent_up_down::',
  ability_description_common_content_speedup:
    'スピードアップ効果 ::percent_up_down::',
  ability_description_common_content_fever_time:
    'フィーバーモード時間 ::percent_up_down::',
  ability_description_common_content_ease_of_heal:
    '::target::の受ける回復量 ::percent_up_down::',
  ability_description_common_content_ease_of_heal_minimal:
    '受ける回復量 ::percent_up_down::',
  ability_description_common_content_scapegoat:
    '::target::の代わりに自身がダメージを受ける',
  ability_description_common_content_scapegoat_minimal:
    '代わりに自身がダメージを受ける',
  ability_description_common_content_aditional_direct_attack_and_damage:
    '::target::の直接攻撃を ::count:: 回にして、その合計ダメージを ::percent_up_down::',
  ability_description_common_content_aditional_direct_attack_and_damage_minimal:
    '直接攻撃を ::count:: 回にして、その合計ダメージを ::percent_up_down::',
  ability_description_common_content_aditional_direct_attack:
    '::target::の直接攻撃を ::count:: 回にする',
  ability_description_common_content_aditional_direct_attack_minimal:
    '直接攻撃を ::count:: 回にする',
  ability_description_common_content_poison_strength:
    '::target::の毒ダメージ ::percent_up_down::',
  ability_description_common_content_poison_strength_minimal:
    '毒ダメージ ::percent_up_down::',
  ability_description_common_content_power_flip_combo_count_down:
    'パワーフリップLv3に必要なコンボ数 ::count::',
  ability_description_common_content_condition_slayer:
    '::target::が::condition::中の敵に与えるダメージ ::percent_up_down::',
  ability_description_common_content_condition_slayer_minimal:
    '::condition::中の敵に与えるダメージ ::percent_up_down::',
  ability_description_common_content_resistance_to_condition_enemy:
    '::condition::中の敵から::target::へのダメージ ::percent:: 軽減',
  ability_description_common_content_resistance_to_condition_enemy_minimal:
    '::condition::中の敵からのダメージ ::percent:: 軽減',
  ability_description_common_content_condition_slayer_for_direct_attack:
    '::target::が::condition::中の敵に与える直接攻撃ダメージ ::percent_up_down::',
  ability_description_common_content_condition_slayer_for_direct_attack_minimal:
    '::condition::中の敵に与える直接攻撃ダメージ ::percent_up_down::',
  ability_description_common_content_condition_share:
    '自身の::condition::の ::percent:: を::target::にも適用',
  ability_description_common_content_condition_share_minimal:
    '::condition::の ::percent:: を適用',
  ability_description_common_content_condition_prevent:
    '::target::の::condition::無効',
  ability_description_common_content_condition_prevent_minimal:
    '::condition::無効',
  ability_description_common_content_condition_extend:
    '::target::の::condition::の効果時間 ::percent_up_down::',
  ability_description_common_content_condition_extend_minimal:
    '::condition::の効果時間 ::percent_up_down::',
  ability_description_common_content_second_skill_gauge:
    '::target:: のスキルゲージ最大値 ::percent_up_down:: ',
  ability_description_common_content_second_skill_gauge_minimal:
    'スキルゲージ最大値 ::percent_up_down:: ',
  ability_description_instant_content_coffin_base_count_down:
    '::target::の棺桶カウント ::count::',
  ability_description_instant_content_coffin_base_count_down_minimal:
    '棺桶カウント ::count::',
  ability_description_instant_content_coffin_base_count_up:
    '::target::の棺桶カウント ::count::',
  ability_description_instant_content_coffin_base_count_up_minimal:
    '棺桶カウント ::count::',
  ability_description_instant_content_hp: '::target::のHP ::percent_up_down::',
  ability_description_instant_content_hp_minimal: 'HP ::percent_up_down::',
  ability_description_instant_content_ratio_heal:
    '::target::を最大HPの ::percent:: 回復',
  ability_description_instant_content_ratio_heal_minimal:
    '最大HPの ::percent:: 回復',
  ability_description_instant_content_fixed_heal:
    '::target::のHPを ::count:: 回復',
  ability_description_instant_content_fixed_heal_minimal: 'HPを ::count:: 回復',
  ability_description_instant_content_ratio_damage_current_hp:
    '::target::に現在HPの ::percent:: のダメージ',
  ability_description_instant_content_ratio_damage_current_hp_minimal:
    '現在HPの ::percent:: のダメージ',
  ability_description_instant_content_ratio_damage_max_hp:
    '::target::に最大HPの ::percent:: のダメージ',
  ability_description_instant_content_ratio_damage_max_hp_minimal:
    '最大HPの ::percent:: のダメージ',
  ability_description_instant_content_fixed_damage:
    '::target::に ::count:: ダメージ',
  ability_description_instant_content_fixed_damage_minimal:
    '::count:: ダメージ',
  ability_description_instant_content_skill_gauge:
    '::target::のスキルゲージ ::percent_up_down::',
  ability_description_instant_content_skill_gauge_minimal:
    'スキルゲージ ::percent_up_down::',
  ability_description_instant_content_barrier:
    '::target::に最大HPの ::percent:: のバリアを張る',
  ability_description_instant_content_barrier_minimal:
    '最大HPの ::percent:: のバリアを張る',
  ability_description_instant_content_add_fever_point:
    'フィーバーゲージ ::count::',
  ability_description_instant_content_add_combo: 'コンボ ::count::',
  ability_description_instant_content_enemy_damage:
    '敵全体に::target::の::parameter::の ::times::の威力を持つ::element_short::ダメージ',
  ability_description_instant_content_enemy_damage_minimal:
    '敵全体に::parameter::の ::times::の威力を持つ::element_short:::ダメージ',
  ability_description_instant_content_trigger_enemy_damage:
    'その敵に::target::の::parameter::の ::times::の威力を持つ::element_short::ダメージ',
  ability_description_instant_content_trigger_enemy_damage_minimal:
    'その敵に::parameter::の ::times::の威力を持つ::element_short::ダメージ',
  ability_description_prameter_reference_attack: '攻撃力',
  ability_description_prameter_reference_max_hp: '最大HP',
  ability_description_prameter_reference_current_hp: '現在HP',
  ability_description_instant_content_count_up_skill_invoke:
    '::target::のスキル発動回数カウント ::count::',
  ability_description_instant_content_count_up_skill_invoke_minimal:
    'スキル発動回数カウント ::count::',
  ability_description_instant_content_count_up_enemy_kill:
    '敵撃破数カウント ::count::',
  ability_description_instant_content_count_up_fever:
    'フィーバー回数カウント ::count::',
  ability_description_instant_content_count_up_power_flip:
    'パワーフリップ発動回数カウント ::count::',
  ability_description_for_second: '::second::秒間',
  ability_description_flip_limit_once: 'フリップするまで',
  ability_description_flip_limit_n_times: '::count:: フリップするまで',
  ability_description_variety_element: '属性',
  ability_description_variety_race: '種族',
  ability_description_variety_speciality: 'タイプ',
  ability_description_condition_target_good_all: '強化効果',
  ability_description_condition_target_bad_all: '弱体効果',
  ability_description_condition_target_both_all: 'コンディション変化効果',
  ability_description_condition_target_good_attack: '攻撃力アップ効果',
  ability_description_condition_target_bad_attack: '攻撃力ダウン効果',
  ability_description_condition_target_good_skill_damage:
    'スキルダメージアップ効果',
  ability_description_condition_target_bad_skill_damage:
    'スキルダメージダウン効果',
  ability_description_condition_target_good_all_elements_resistance:
    'すべての属性耐性アップ効果',
  ability_description_condition_target_bad_all_elements_resistance:
    'すべての属性耐性ダウン効果',
  ability_description_condition_target_good_resistance:
    '::element::耐性アップ効果',
  ability_description_condition_target_bad_resistance:
    '::element::耐性ダウン効果',
  ability_description_condition_target_damage_cut: 'ダメージカット効果',
  ability_description_condition_target_invincible: '無敵効果',
  ability_description_condition_target_regeneration: '再生効果',
  ability_description_condition_target_poison: '毒効果',
  ability_description_condition_target_paralysis: 'マヒ効果',
  ability_description_condition_target_member_frozen: '無気力効果',
  ability_description_condition_target_enemy_frozen: '鈍足効果',
  ability_description_condition_target_good_fever_point:
    'フィーバーゲージ上昇率アップ効果',
  ability_description_condition_target_bad_fever_point:
    'フィーバーゲージ上昇率ダウン効果',
  ability_description_condition_target_good_stunify: '敵をダウンさせやすい効果',
  ability_description_condition_target_bad_stunify: '敵をダウンさせにくい効果',
  ability_description_condition_target_good_character_slayer: '特攻効果',
  ability_description_condition_target_bad_character_slayer: '特攻ダウン効果',
  ability_description_condition_target_good_stun_wince_slayer:
    'ブレイク・ダウン中の敵に与えるダメージアップ効果',
  ability_description_condition_target_bad_stun_wince_slayer:
    'ブレイク・ダウン中の敵に与えるダメージダウン効果',
  ability_description_condition_target_good_debuff_resistance:
    '弱体耐性アップ効果',
  ability_description_condition_target_silence: '沈黙効果',
  ability_description_condition_target_additional_direct_attack: '連撃効果',
  ability_description_condition_target_piercing: '貫通効果',
  ability_description_condition_target_flying: '浮遊効果',
  ability_description_condition_target_good_powerflip_damage:
    'パワーフリップダメージアップ効果',
  ability_description_condition_target_bad_powerflip_damage:
    'パワーフリップダメージダウン効果',
  ability_description_condition_target_good_direct_damage:
    '直接攻撃ダメージアップ効果',
  ability_description_condition_target_bad_direct_damage:
    '直接攻撃ダメージダウン効果',
  ability_description_condition_target_speedup: 'スピードアップ効果',
  ability_description_target_ally: 'キャラ',
  ability_description_target_enemy: 'の敵',
  ability_description_delimiter: ' ／ ',
  ability_description_delimiter_newline: '"\n"',
  ability_description_delimiter_content: ' ＆ ',
  element_kind_red: '火',
  element_kind_blue: '水',
  element_kind_yellow: '雷',
  element_kind_green: '風',
  element_kind_white: '光',
  element_kind_black: '闇',
  element_kind_any: '無',
  element_kind_none: '???',
  element_kind_red_full: '火属性',
  element_kind_blue_full: '水属性',
  element_kind_yellow_full: '雷属性',
  element_kind_green_full: '風属性',
  element_kind_white_full: '光属性',
  element_kind_black_full: '闇属性',
  element_kind_all_full: '全属性',
  element_kind_any_full: '無属性',
  element_kind_red_icon: "<icon id='red'>",
  element_kind_blue_icon: "<icon id='blue'>",
  element_kind_yellow_icon: "<icon id='yellow'>",
  element_kind_green_icon: "<icon id='green'>",
  element_kind_white_icon: "<icon id='white'>",
  element_kind_black_icon: "<icon id='black'>",
  type_knight: '剣士',
  type_fighter: '格闘',
  type_ranged: '射撃',
  type_supporter: '補助',
  type_special: '特殊',
  gender_male: '男性',
  gender_female: '女性',
  gender_unknown: '不明'
};
