---
title: Discipline Priest Basics
lang: en-US
---

<img class="class-logo" :src="$withBase('/img/priest-logo.png')" />

# How Does Discipline Play?

Discipline is a healing specialisation that focuses on damage and healing in tandem,
providing consistent offensive support even when the healing required is high. Discipline
also provides amazing raid support with unrivaled mitigation, and the ability to buff
players with shields and extra health.

Discipline still fulfills the role of a healer, and in full capacity. That is to say, Discipline
does not sacrifice *any* healing potential to deal the damage it provides. This fact combined
with the unique effective health increases it can provide makes Discipline an almost constant
amongst raid teams.


## Abilities of Note
<Talent :alwaysActive=true spellName="Shadowfiend"></Talent>
<Talent :alwaysActive=true spellName="Power Word: Shield"></Talent>
<Talent :alwaysActive=true spellName="Rapture"></Talent>
<Talent :alwaysActive=true spellName="Power Word: Barrier"></Talent>
<Talent :alwaysActive=true spellName="Smite"></Talent>
<Talent :alwaysActive=true spellName="Penance"></Talent>


## Strengths and Weaknesses
### Strengths
* Consistent, high damage floor.
* Powerful, and potentially group-wide absorbs (<Spell id="271466"></Spell>).
* Health support buff. (<Spell id="21562"></Spell>)
* High variety of build options.

### Weaknesses
* Mobility options are weak.
* Mediocre personal survivability.
* Medium susceptibility to players spread.

## Crash Course
### Core Mechanics
#### Atonement
Atonement is the core mechanic of Discipline, Atonement is to Discipline Priest as HoT is to
druids. A running theme with the specialisation is that abilities which are outside of the Atonement
interaction chain are not very good.

Atonement is spread using a few abilities, <Spell spellName="Power Word: Shield"></Spell>, <Spell spellName="Shadow Mend"></Spell> and
<Spell spellName="Power Word: Radiance"></Spell>. Usually the former will handle application in most cases, but in the
case where you need lots of Atonement fast, Power Word: Radiance is there.


#### Core Damaging Abilities
Outside of the Atonement spreading abilities, you have a core set of offensive spells that build upon
those,
* <Spell spellName="Penance"></Spell> - Cast on cooldown with Atonement spread.
* <Spell spellName="Shadow Word: Pain"></Spell> - Juggle this as many enemies as you can.
* <Spell spellName="Smite"></Spell> - Hit this as much as you can if all else is done.

Note that Shadow Word: Pain can quickly become a burden to keep up on many enemies. Do not compromise
your Atonement count to spread this. Afterall, no Atonement means no healing from damage, a balance
will be the best for your output in most situations.


#### Do Not Cast Holy Nova
Discipline currently has a huge "noob trap", so to make things explicitly clear this gets a section.
<Spell spellName="Holy Nova"></Spell> is never, ever worth casting in any PvE scenario. Unbind this ability and save
yourself the cognitive burden of having to consider it as a choice. It doesn't provide meaningful atonement
value, it doesn't heal for much either, and it costs too much to use in moments with no Atonement.

#### "Ramping"
As you increase in player count, ramping becomes more and more valuable as a skill to practice. Ramping
essentially refers to the player starting to spread Atonement in order to counter a burst of incoming
damage as soon as it happens. Discipline has a number of talents that encourage this playstyle, not
limited to <Spell spellName="Schism"></Spell>, and <Spell spellName="Evangelism"></Spell>.

<img :src="$withBase('/img/wheelchair-ramping.jpg')" />

[Source](http://www.nataliedee.com/index.php?date=041407)

#### Raid Cooldowns
Discipline, being a spec built around a dichotomy between damage and healing, has two raid cooldowns of
each affinity.

#### Shadowfiend
Combined with the potential provided by [ramping](#ramping), <Spell spellName="Shadowfiend"></Spell> provides a huge
amount of extra damage that will give an exceptional boost to your healing. This is a much more skill
oriented ability than it seems, as a large amount of Atonement is required to make it effective.

#### Power Word: Barrier
Power Word: Barrier is a much more niche cooldown than Shadowfiend, providing a huge amount of mitigation
to players within it's radius. This ability no longer has any Atonement interaction, but is such a massive
amount of mitigation for incoming raidwide bursts that it cannot be ignored. If you're having trouble
making use of this due to stacking limitations, try the Luminous Barrier talent.

### Talent Build - Generic
<div class="talent-build">
  <SpellBox spellName="Castigation" label="Tier 15"></SpellBox>
  <SpellBox spellName="Angelic Feather" label="Tier 30"></SpellBox>
  <SpellBox spellName="Shield Discipline" label="Tier 45"></SpellBox>
  <SpellBox spellName="Shining Force" label="Tier 60"></SpellBox>
  <SpellBox spellName="Sins of the Many" label="Tier 75"></SpellBox>
  <SpellBox spellName="Purge the Wicked" label="Tier 90"></SpellBox>
  <SpellBox spellName="Lenience" label="Tier 100"></SpellBox>
</div>

This build focuses on providing the most value and having the least active buttons, the offensive
capabilities are mediocre however it reduces your active buttons to mainly consisting of <Spell spellName="Power Word: Shield"></Spell>,
 <Spell spellName="Purge the Wicked"></Spell>, and <Spell spellName="Smite"></Spell>. The playstyle
here is mainly reactionary, with a focus on keeping as many Purge the Wicked debuffs up as you can whilst
keeping a healthy number of Atonements active.
