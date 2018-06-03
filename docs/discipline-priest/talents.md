---
title: Talents
lang: en-US
---

# Talent Choices

Discipline has a lot of versatile choices in Battle for Azeroth, a retuning of the abilities
has left us in a very strong position to choose based on the situation. Below you can find
some recommendations on which abilities to choose.

<Spell id=214621></Spell> is a very strong choice, enabling you to choose when you want to benefit from this tier's bonus. As Discipline can still pull off very strong burst, this is very advantageous.

## Talent Recommendations

<TalentRow :showPickIcon=true :tier=15 :spellNames="['Castigation', 'Twist of Fate', 'Schism']" :correctPicks="[0, 1, 1]"></TalentRow>

<hr />

<SkillSpan level="normal">

Twist of Fate and Schism are very strong choices, Twist of Fate being the choice for Mythic
raiders in Legion for progress environments may not repeat itself due to the increased breakdown
of absorbs in Battle for Azeroth.

The buffs to Schism have left it in a very strong position as a burst cooldown that synchronizes
well with Evangelism, as well as giving a huge boost to DPS. This is very welcome in a world with
no Light's Wrath.

Castigation has fallen by the wayside, as Penance has seen a very significant power decrease, the
extra bolt just seems to not be doing much in beta logs. It may become a choice pick for fights
where Contrition is strong, but Twist of Fate won't proc.

<hr />

</SkillSpan>

<TalentRow :showPickIcon=true :tier=30 :spellNames="['Angelic Feather', 'Body and Soul', 'Masochism']" :correctPicks="[1, 0, 0]" :reverse=true></TalentRow>

<hr />

<SkillSpan level="normal">

Angelic Feather is realistically the only ability you will take here, the mobility is amazing on a
specialisation that is very slow otherwise. Masochism may see niche use on fights where Desperate
Prayer alone won't help, however isn't recommended.

::: tip
Use the macro below to share a bind with Angelic Feather and a self-cast Shadow Mend, it will even
cast the Angelic Feather on you!

```
#showtooltip
/cast [talent:2/1,@player] Angelic Feather
/stopspelltarget
/cast [talent:2/3, @player] Shadow Mend
```

:::

<hr />

</SkillSpan>

<TalentRow :showPickIcon=true :tier=45 :spellNames="['Power Word: Solace', 'Shield Discipline', 'Mindbender']" :correctPicks="[1, 1, 1]"></TalentRow>

<hr />

<SkillSpan level="normal">

Power Word: Solace strikes a nice balance between it's peers, not the best for mana return and not
the best for burst DPS. It's available for some strong synergy with Schism as the cooldown is half that
of Schism.

Shield Discipline is low in raw output, but it gives you a lot more mana to do with what you please. This
is the strongest talent on the tier for mana by far, however you lose a significant amount of output for that
benefit. Shield Discipline will work well if you have to use Power Word: Shield a lot, but it's recommended
that you try to focus on burst windows and choose one of the alternatives on this row.

Mindbender is incredibly strong in Battle for Azeroth, it is the strongest output on the tier but gives
the lowest amount of mana. This works well for Mindbender as your situation for choosing it is for strong burst
healing in minute intervals, meaning mana expenditure between ramps will not be high.

<hr />

</SkillSpan>

<TalentRow :showPickIcon=true :tier=60 :spellName="['Psychic Voice', 'Shining Force', 'Dominant Mind']" :correctPicks="[0, 1, 0]" reverse=true></TalentRow>

<hr />

<SkillSpan level="normal">

When was the last time you cast Psychic Scream or Mind Control? Thought so - take Shining Force.

<hr />

</SkillSpan>

<TalentRow :showPickIcon=true :tier=75 :ids="['Sins of the Many', 'Contrition', 'Shadow Covenant']" :correctPicks="[1, 1, 0]"></TalentRow>

<hr />

<SkillSpan level="normal">

Sins of the Many is a very strong for small group formats, giving a baseline 12% damage
bonus to the player and degrading by 1% for each Atonement. The floor for this effect
is 3%, so even with 20 Atonements out you will be doing a minimum of 3% more damage.

Contrition is a strong pick when you need to do strong spot healing and Atonement healing
at the same time. It is difficult to tell how much healing is provided by this talent,
but if you are raiding we have a module in the [WoWAnalyzer](www.wowanalyzer.com) Discipline
analyzer!

Note that Contrition is a significantly _weaker_ healing effect on your Atonements than a
regular offensive Penance would be. However, you do gain the very strong single target spot
healing that Penance provides. By using Contrition you do lose a lot of offensive synergy with
<Spell spellName="Purge the Wicked"></Spell> and <Spell spellName="Schism"></Spell>.

Under no circumstances is it acceptable to take Shadow Covenant, the healing is far too weak
and far too expensive to use even in a mythic plus context.

<hr />

</SkillSpan>

<TalentRow :showPickIcon=true :tier=90 :spellNames="['Purge the Wicked', 'Divine Star', 'Halo']" :correctPicks="[1, 1, 1]" reverse=true></TalentRow>

<hr />

<SkillSpan level="normal">

Purge the Wicked is still very strong in contexts where the DoT can spread from use
of Penance. Thanks to a _huge_ buff to Halo and Divine Star however, this is no
longer an obvious pick on fights where this doesn't happen often, or not at all.

Divine Star is very strong in stack situations when the healing can be made use of every 15s.
Interestingly the Atonement component of Divine Star is very minor, meaning that there's no
pressure to have a lot of Atonement out whilst casting it. It will do a significant amount more
healing than Halo if you can manage it right. The downside is that the cost is
very high, and that the position requirements are strict.

Halo is a big boy now, arguably the default choice for raiders on single target fights.
It deals a huge amount of damage, and also does a huge amount of raw healing that _is_
buffed by <Spell spellName="Mastery: Grace"></Spell>.

<hr />

</SkillSpan>

<TalentRow :showPickIcon=true :tier=100 :spellNames="['Lenience', 'Luminous Barrier', 'Evangelism']" :correctPicks="[1, 1, 1]"></TalentRow>

<hr />

<SkillSpan level="normal">

Lenience is as always, a huge amount of mitigation for your raid. This talent is strong, however if you are
having trouble judging how strong, remember that [WoWAnalyzer](www.wowanalyzer.com) can tell you how much
it does. Typically, if the fight follows an archetype where people are taking huge amounts of damage, consistently,
Lenience is your choice.

Luminous Barrier replaces Power Word: Barrier, but gives you a massive absorb shield instead. This _seems_ good but
you will be able to squeeze more value out of having Barrier and Evangelism. **Taking this in anything other than a raid is a mistake.** If you cannot make Power Word: Barrier work, or you have trouble utilising it, Luminous Barrier
may be a good pick.

Evangelism is a good pick on fights where you need an extended burst window for Atonement, the ability to extend your Atonements and cast more of your cooldowns into them counters a lot of intense healing phases.

</SkillSpan>

<QuickRead></QuickRead>
