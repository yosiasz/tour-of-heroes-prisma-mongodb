const express = require('express')
const router = express.Router();
const { prisma } = require('../../generated/prisma-client')


router.get('/', async (req, res) => {
  const heroes = await prisma.heroes()
  res.json(heroes)
})

router.get('/:id', async (req, res) => {
  const { id } = req.params  
  const hero = await prisma.heroes({ where: { id } })
  res.json(hero[0])
})

router.post('/', async (req, res) => {
  const result = await prisma.createHeroe({
    ...req.body,
  })
  res.json(result)
})

router.put('/:id', async (req, res) => {
  const { id } = req.params
  const post = await prisma.updateHero({
    where: { id }
  })
  res.json(post)
})

router.delete(`/:id`, async (req, res) => {
  const { id } = req.params
  const hero = await prisma.deleteHeroe({ id })
  res.json(hero)
})

module.exports = router;